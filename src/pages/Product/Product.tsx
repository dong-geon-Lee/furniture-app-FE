import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { RootState } from "../../store";
import { addItem, getItems } from "../../store/features/carts/cartsSlice";
import { getUser } from "../../store/features/users/usersSlice";

import axios from "axios";
import { useSnackbar } from "notistack";

import * as S from "./styles";
import * as A from "../../assets";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const location = useLocation();
  const currentProduct = location.state;

  const { cartItems } = useSelector((state: RootState) => state.carts);
  const { user, token } = useSelector((state: RootState) => state.users);

  const findCartId = cartItems?.find(
    (cartItem: any) => cartItem?.product?.id === currentProduct?.id
  );

  const handleIncToCart = async (qty: number) => {
    if (findCartId !== undefined) {
      const response = await axios.patch(
        `http://localhost:5000/carts/${findCartId?.id}`,
        {
          quantity: qty,
        }
      );

      const datas = response.data;
      const newCarts = cartItems.map((cartItem: any) =>
        cartItem.id === datas.id ? (cartItem = datas) : cartItem
      );

      dispatch(getItems(newCarts));
    } else {
      alert("먼저 장바구니에 담아주세요");
      return;
    }
  };

  const handleAddCart = async () => {
    const response = await axios.post("http://localhost:5000/carts", {
      userId: user?.id,
      productId: currentProduct.id,
      quantity: 1,
    });

    dispatch(addItem(response.data));
    fetchData();
    enqueueSnackbar("장바구니로 이동되었습니다!", { variant: "success" });
  };

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/carts");
    dispatch(getItems(response.data));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/carts");
      dispatch(getItems(response.data));
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

  return (
    <S.Container>
      <Header activeClass="header" />

      <S.Div className="product__image">
        <S.ProductImage $image={currentProduct?.imageURL} />
        <S.Img
          src={A.back}
          alt="product1"
          className="product1"
          onClick={() => navigate("/home")}
        />
      </S.Div>
      <S.Div className="product__info">
        <S.H1 className="product__title">{currentProduct?.name}</S.H1>
        <S.Div className="product__box">
          <S.H1 className="product__price">$ {currentProduct?.price}</S.H1>
          <S.Div className="product__qty">
            <S.Button
              className="product__count"
              onClick={() =>
                handleIncToCart(
                  findCartId !== undefined ? findCartId.quantity + 1 : 0
                )
              }
            >
              <S.Img src={A.btn1} alt="btn1" />
            </S.Button>
            <S.H2 className="product__text">{findCartId?.quantity || 1}</S.H2>
            <S.Button
              className="product__count"
              onClick={() =>
                handleIncToCart(
                  findCartId !== undefined ? findCartId.quantity + 1 : 0
                )
              }
            >
              <S.Img src={A.btn2} alt="btn2" />
            </S.Button>
          </S.Div>
        </S.Div>
        <S.Div className="review">
          <S.Img src={A.star2} alt="star2" />
          <S.H3>4.5</S.H3>
          <S.P className="product__review">(50 reviews)</S.P>
        </S.Div>
        <S.Div>
          <S.P className="description">
            {currentProduct?.name} {currentProduct?.description}
          </S.P>
          <S.Div className="product__click">
            <S.Button className="product__markers">
              <FavoriteBorderIcon
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </S.Button>
            <S.Button
              className="product__cart"
              disabled={cartItems.some(
                (cartItem: any) => cartItem.product?.id === currentProduct.id
              )}
              onClick={() => handleAddCart()}
            >
              Add to cart
            </S.Button>
          </S.Div>
        </S.Div>
      </S.Div>
    </S.Container>
  );
};

export default Product;
