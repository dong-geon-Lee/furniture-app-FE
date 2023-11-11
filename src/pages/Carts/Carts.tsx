import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  decreasePrice,
  getItems,
  totalCart,
} from "../../store/features/carts/cartsSlice";

import axios from "axios";
import { useEffect } from "react";
// import { useState } from "react";

const Carts = () => {
  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.carts
  );

  console.log(cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartItems = async (id: number) => {
    // dispatch(removeItem(cartLists));
    // dispatch(getItems(response.data));
    // const seletedItem = cartItems.find(
    //   (cartItem: ICartItem) => cartItem.id === id
    // );
    // if (seletedItem) dispatch(decreasePrice(parseInt(seletedItem.price)));

    await axios.delete(`http://localhost:5000/carts/${id}`);
    const response = await axios.get("http://localhost:5000/carts");
    const datas = response.data;
    dispatch(getItems(datas));

    console.log(datas);
    dispatch(decreasePrice(+datas.product.price));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/carts");
      const datas = response.data;
      dispatch(getItems(datas));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const total = cartItems.reduce((acc, cur) => acc + +cur.product.price, 0);
    console.log(total);
    dispatch(totalCart(total));
  }, []);

  return (
    <S.Container>
      <S.Div className="header">
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>

      <S.Div className="box">
        <S.Img
          src={A.back2}
          alt="back2"
          className="logo"
          onClick={() => navigate("/home")}
        />
        <S.Div>
          <S.H1 className="title">My cart</S.H1>
        </S.Div>
        <S.Div />
      </S.Div>

      <S.Section className="cart__list">
        {cartItems.map((cartItem) => (
          <S.Box key={cartItem?.product?.id}>
            <S.Main className="grid__box">
              <S.Img
                src={cartItem?.product?.imageURL}
                alt={cartItem?.product?.name}
                className="grid__img"
              />
              <S.Div className="cart__info">
                <S.Label>{cartItem.product?.name}</S.Label>
                <S.Span>$ {cartItem.product?.price}</S.Span>
                <S.Div className="cart__menu">
                  <S.Button
                    className="cart__btn"
                    // onClick={() => dispatch(increasePrice(+cartItem.price))}
                  >
                    <S.Img src={A.btn1} alt="btn1" />
                  </S.Button>
                  <S.H1 className="cart__qty">{cartItem?.quantity}</S.H1>
                  <S.Button
                    className="cart__btn"
                    // onClick={() => dispatch(decreasePrice(+cartItem.price))}
                  >
                    <S.Img src={A.btn2} alt="btn2" />
                  </S.Button>
                </S.Div>
              </S.Div>
              <S.Div
                className="cart__btns"
                onClick={() => handleCartItems(cartItem.id)}
              >
                <S.Button className="xIcon__btn">
                  <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
                </S.Button>
              </S.Div>
            </S.Main>
            <S.Hr />
          </S.Box>
        ))}
        <S.Div className="cart__results">
          <S.Div className="cart__total">
            <S.H2>Total:</S.H2>
            <S.H1 className="cart__price">$ {totalPrice}</S.H1>
          </S.Div>
          <S.Button className="cart__checkout">Check out</S.Button>
        </S.Div>
      </S.Section>
    </S.Container>
  );
};

export default Carts;
