import React, { useState, ChangeEvent, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Alert, Backdrop, CircularProgress } from "@mui/material";

import { IProductState } from "../../@types";
import axios from "axios";

import * as S from "./styles";
import { useDispatch } from "react-redux";
import {
  addProduct,
  getProducts,
} from "../../store/features/products/productsSlice";

const AdminProductForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [productInfo, setProductInfo] = useState<IProductState>({
    name: "",
    description: "",
    price: "",
    imageURL: "",
    category: "",
  });

  const [open, setOpen] = useState(false);
  const [activeAlert, setActiveAlert] = useState(false);

  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const handleCategoryOnChange = (e: SelectChangeEvent) => {
    setProductInfo({ ...productInfo, category: e.target.value });
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);

    const formData = new FormData();
    if (selectedFile) formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const productData = {
        name: productInfo.name,
        description: productInfo.description,
        price: Number(productInfo.price),
        imageURL: `https://furniture-bucket.s3.ap-northeast-2.amazonaws.com/${response.data?.id}`,
        category: productInfo.category,
      };

      const { data } = await axios.post(
        "http://localhost:5000/products",
        productData
      );

      console.log(data);

      dispatch(addProduct(data));

      setSelectedFile(null);
      setProductInfo({
        name: "",
        description: "",
        price: "",
        imageURL: "",
        category: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await axios.get("http://localhost:5000/products");
      dispatch(getProducts(response.data));
    };
    fetchDatas();
  }, [dispatch]);

  useEffect(() => {
    if (open) {
      const timeoutId = setTimeout(() => {
        setOpen(false);
        setActiveAlert(true);
      }, 2500);

      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  useEffect(() => {
    if (activeAlert) {
      const timeoutId = setTimeout(() => {
        setActiveAlert(false);
      }, 3500);

      return () => clearTimeout(timeoutId);
    }
  }, [activeAlert]);

  return (
    <S.Container>
      <S.H1 variant="h4" sx={{ mb: "1.4rem" }}>
        상품 업로드
      </S.H1>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {activeAlert && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={activeAlert}
        >
          <Alert severity="success" sx={{ width: "23rem", p: "1.6rem" }}>
            <S.H1 variant="h4" sx={{ textAlign: "center", width: "100%" }}>
              상품 업로드 완료!
            </S.H1>
          </Alert>
        </Backdrop>
      )}
      <S.Form
        onSubmit={onSubmit}
        component="form"
        noValidate
        autoComplete="off"
      >
        <S.Input type="file" onChange={onImageChange} />
        <S.Div>
          <S.Input
            type="text"
            name="name"
            value={productInfo.name}
            onChange={onChange}
            required
            label="상품명"
            size="medium"
            margin="dense"
            variant="outlined"
          />
        </S.Div>
        <S.Div>
          <S.Input
            type="text"
            name="description"
            value={productInfo.description}
            onChange={onChange}
            required
            label="상세설명"
            size="medium"
            margin="dense"
            variant="outlined"
            multiline
            maxRows={4}
          />
        </S.Div>
        <S.Div>
          <S.Input
            type="text"
            name="price"
            value={productInfo.price}
            onChange={onChange}
            required
            label="가격"
            size="small"
            margin="dense"
            variant="outlined"
          />
        </S.Div>
        <S.Div>
          <FormControl fullWidth>
            <InputLabel required>카테고리</InputLabel>
            <Select
              name="category"
              value={productInfo.category}
              label="카테고리"
              onChange={handleCategoryOnChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Chair">Chair</MenuItem>
              <MenuItem value="Table">Table</MenuItem>
              <MenuItem value="Armchair">Armchair</MenuItem>
              <MenuItem value="Bed">Bed</MenuItem>
            </Select>
          </FormControl>
        </S.Div>
        <S.Button type="submit" variant="contained">
          제출하기
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default AdminProductForm;
