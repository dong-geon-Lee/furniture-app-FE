import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { getUser } from "../../store/features/users/usersSlice";
import { getProducts } from "../../store/features/products/productsSlice";
import {
  addItem,
  getItems,
  increasePrice,
} from "../../store/features/carts/cartsSlice";

import { ICartItem, IProductProps } from "../../@types";
import { VariantType, useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import axios from "axios";

import ProductButton from "../../components/ProductButton/ProductButton";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import * as S from "./styles";
import * as A from "../../assets";

const Home = () => {
  const { token, user } = useSelector((state: RootState) => state.users);
  const { products } = useSelector((state: RootState) => state.products);

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
    const response = await axios.post("http://localhost:5000/carts", {
      userId: user.id,
      productId,
      quantity: 1,
    });

    const productPrice = products.find(
      (product) => product.id === productId
    )?.price;

    if (productPrice) dispatch(increasePrice(productPrice));
    dispatch(addItem(response.data));
    enqueueSnackbar("장바구니로 이동되었습니다!", { variant });
  };

  const handleProductItem = (id: number) => {
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

  const formattedPrice = new Intl.NumberFormat("ko-KR");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        dispatch(getProducts(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getUser(response.data));
    };
    fetchData();
  }, [token, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/carts/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

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
      dispatch(getItems(cartDatas));
    };
    fetchData();
  }, [token, dispatch]);

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
        {filteredProducts.map((product: any, index) => (
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
            <S.GridText>{formattedPrice.format(product.price)} 원</S.GridText>

            <S.Button
              disabled={cartItems.some(
                (cartList: any) => cartList.productId === product.id
              )}
              onClick={() => handleClickVariant("success", product.id)}
            >
              <S.GridLogo
                $active={cartItems.some(
                  (cartItem: any) => cartItem?.productId === product.id
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
