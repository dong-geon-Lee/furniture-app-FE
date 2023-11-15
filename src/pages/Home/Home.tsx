import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addItem,
  getItems,
  increasePrice,
  totalCart,
} from "../../store/features/carts/cartsSlice";

import { ICartItem, IProductProps } from "../../@types";
import { VariantType, useSnackbar } from "notistack";
import { IconButton } from "@mui/material";

import ProductButton from "../../components/ProductButton/ProductButton";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import axios from "axios";
import * as S from "./styles";
import * as A from "../../assets";
import { getUser } from "../../store/features/users/usersSlice";

const Home = () => {
  const { token } = useSelector((state: RootState) => state.users);
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const { cartItems } = useSelector((state: RootState) => state.carts);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = async (
    variant: VariantType,
    productId: number
  ) => {
    const userId = 1;
    const response = await axios.post("http://localhost:5000/carts", {
      userId,
      productId,
      quantity: 1,
    });

    console.log(productId, "야야야");

    const productPrice = products.find(
      (product) => product.id === productId
    )?.price;

    if (productPrice) dispatch(increasePrice(productPrice));
    dispatch(addItem(response.data));
    dispatch(totalCart(cartItems.length));
    enqueueSnackbar("장바구니로 이동되었습니다!", { variant });
  };

  const handleProductItem = (id?: number) => {
    const selectedItems = products.find((item) => item.id === id);
    navigate(`/home/${id}`, { state: selectedItems });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "All"
        ? products
        : products.filter((product) => product.category === category)
    );
  };

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const datas = response.data;
        setProducts(datas);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/carts");
      const datas = response.data;

      const cartDatas = datas.map((cartItem: ICartItem) => {
        const { id, quantity, product } = cartItem;
        const { id: productId, name, price, imageURL } = product || [];
        return {
          id,
          productId: productId,
          quantity,
          name: name,
          price: price,
          imageURL: imageURL,
        };
      });
      dispatch(totalCart(cartDatas.length));
      dispatch(getItems(cartDatas));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getUser(response.data));
    };
    fetchData();
  }, [token, dispatch]);

  console.log(filteredProducts);
  console.log(cartItems);

  return (
    <S.Container>
      <Header activeClass="header__normal" />
      <S.ImgBox>
        <S.Img src={A.search} alt="search" />
        <S.TextBox>
          <S.H1>Make home</S.H1>
          <S.Title>Beautiful</S.Title>
        </S.TextBox>
        <IconButton onClick={() => navigate("/carts")}>
          <S.StyledBadge badgeContent={cartItems.length}>
            <S.Img src={A.cart} alt="cart" />
          </S.StyledBadge>
        </IconButton>
      </S.ImgBox>

      <S.LogoBox>
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.star}
          categoryName="All"
        />
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.chair}
          categoryName="Chair"
        />
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.table}
          categoryName="Table"
        />
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.sofa}
          categoryName="Armchair"
        />
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.bed}
          categoryName="Bed"
        />
      </S.LogoBox>

      <S.Grid>
        {filteredProducts.map((product, index) => (
          <S.GridItem key={index}>
            <S.GridImg
              src={product.imageURL}
              alt={product.name}
              role="button"
              onClick={() => handleProductItem(product.id)}
            />
            <S.GridLabel onClick={() => handleProductItem(product.id)}>
              {product.name}
            </S.GridLabel>
            <S.GridText>$ {product.price}</S.GridText>

            <S.Button
              disabled={cartItems.some(
                (cartList) => cartList.productId === product.id
              )}
              onClick={() =>
                product.id !== undefined &&
                handleClickVariant("success", product.id)
              }
            >
              <S.GridLogo
                $active={cartItems.some(
                  (cartItem) => cartItem?.productId === product.id
                )}
                src={A.frame}
                alt="frame"
              />
            </S.Button>
          </S.GridItem>
        ))}
      </S.Grid>
      <Navigation />
    </S.Container>
  );
};

export default Home;
