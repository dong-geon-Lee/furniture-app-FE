import React, { useState, ChangeEvent, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";

const Admin = () => {
  const [items, setItems] = useState([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    price: "",
    imageURL: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("name", JSON.strproductInfo.name);
    // formData.append("description", productInfo.description);
    // formData.append("price", productInfo.price);
    formData.append("file", selectedFile);

    try {
      const data = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const productData = {
        name: productInfo.name,
        description: productInfo.description,
        price: productInfo.price,
        imageURL: `https://furniture-bucket.s3.ap-northeast-2.amazonaws.com/${data.data?.id}`, // 이미지 파일의 이름을 imageURL로 설정
      };

      const response = await axios.post(
        "http://localhost:5000/products",
        productData
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleUpload = async () => {
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append("file", selectedFile);

  //     try {
  //       await axios.post("http://localhost:5000/upload", formData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       });

  //       alert("이미지가 업로드되었습니다");
  //     } catch (error) {
  //       alert("이미지 업로드에 실패했습니다");
  //     }
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/products");
      const datas = response.data;
      setItems(datas);
    };

    fetchData();
  }, [selectedFile]);

  return (
    <S.Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        alignContent: "center",
      }}
    >
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onImageChange} />
        {/* <button onClick={handleUpload}>이미지업로드</button> */}

        <input
          type="text"
          name="name"
          value={productInfo.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="description"
          value={productInfo.description}
          onChange={onChange}
        />
        <input
          type="text"
          name="price"
          value={productInfo.price}
          onChange={onChange}
        />
        <button type="submit">제출하기</button>
      </form>

      {items
        .slice()
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map((item) => (
          <div key={item.id} style={{ width: "10rem", height: "10rem" }}>
            <img
              src={item.imageURL}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
            <div>
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <h2>{item.price}</h2>
            </div>
          </div>
        ))}
    </S.Container>
  );
};

export default Admin;
