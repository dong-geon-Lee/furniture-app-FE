import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  decreasePrice,
  getItems,
  totalCart,
} from "../../store/features/carts/cartsSlice";

import axios from "axios";
import { ICartItem } from "../../@types";

import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";

const Carts = () => {
  const { token } = useSelector((state: RootState) => state.users);
  const { cartItems: cartDatas, totalPrice } = useSelector(
    (state: RootState) => state.carts
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  const handleCartItems = async (id: number) => {
    const removedCartItem = cartDatas.find((item) => item.id === id);
    if (removedCartItem) {
      dispatch(decreasePrice(removedCartItem?.price));
    }

    await axios.delete(`http://localhost:5000/carts/${id}`);

    const response = await axios.get("http://localhost:5000/carts/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const items = response.data.map((cartItem: ICartItem) => {
      const { id, quantity, product } = cartItem;
      const { id: productId, name, price, imageURL } = product || [];
      return {
        id,
        productId,
        quantity,
        name: name,
        price: price,
        imageURL,
      };
    });

    dispatch(getItems(items));
  };

  const handleIncCartQty = async (id: number) => {
    const newCart = cartDatas.map((cartData) => {
      if (cartData.id !== id) return cartData;
      return { ...cartData, quantity: cartData.quantity + 1 };
    });

    const total = newCart.reduce(
      (acc, cur) => acc + +cur.price * cur.quantity,
      0
    );

    try {
      const selectedCart = newCart.find((cart) => cart.id === id);
      if (selectedCart) {
        await axios.patch(`http://localhost:5000/carts/${selectedCart.id}`, {
          quantity: selectedCart?.quantity,
        });

        dispatch(totalCart(total));
        dispatch(getItems(newCart));
      }
    } catch (error) {
      throw new Error("카트 업데이트 중 오류 발생");
    }
  };

  const handleDecCartQty = async (id: number) => {
    const newCart = cartDatas.map((cartData) => {
      if (cartData.id !== id) return cartData;
      return { ...cartData, quantity: cartData.quantity - 1 };
    });

    const total = newCart.reduce(
      (acc, cur) => acc + +cur.price * cur.quantity,
      0
    );

    try {
      const selectedCart = newCart.find((cart) => cart.id === id);
      if (selectedCart) {
        await axios.patch(`http://localhost:5000/carts/${selectedCart.id}`, {
          quantity: selectedCart?.quantity,
        });

        dispatch(totalCart(total));
        dispatch(getItems(newCart));
      }
    } catch (error) {
      throw new Error("카트 업데이트 중 오류 발생");
    }
  };

  const requestPay = () => {
    const { IMP }: any = window;

    IMP.init("imp91560302");
    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card", // 생략가
        merchant_uid: "order_no_0006", // 상점에서 생성한 고유 주문번호
        name: "주문명:결제테스트",
        amount: 1004,
        buyer_email: "test@portone.io",
        buyer_name: "구매자이름",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구 삼성동",
        buyer_postcode: "123-456",
        m_redirect_url: "https://www.naver.com/",
      },
      async function (rsp: any) {
        // rsp.imp_uid 값으로 결제 단건조회 API를 호출하여 결제결과를 판단합니다.
        // 이후 API를 호출해서 DB에 저장할 수 있다.
        if (rsp.success) {
          console.log(rsp);
          const response = await axios.get("http://localhost:5000/carts");
          console.log(response.data);
        } else {
          alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
        }
      }
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/carts/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const cartDatas = response.data.map((cartItem: ICartItem) => {
        const { id, quantity, product } = cartItem;
        const { id: productId, name, price, imageURL } = product || [];
        return {
          id,
          productId,
          quantity,
          name: name,
          price: price,
          imageURL,
        };
      });
      dispatch(getItems(cartDatas));
    };
    fetchData();
  }, [token, dispatch]);

  useEffect(() => {
    const total = cartDatas.reduce(
      (acc, cur) => acc + +cur.price * cur.quantity,
      0
    );
    dispatch(totalCart(total));
  }, [cartDatas, dispatch]);

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
        {cartDatas.map((cartItem) => (
          <S.Box key={cartItem?.id}>
            <S.Main className="grid__box">
              <S.Img
                src={cartItem?.imageURL}
                alt={cartItem?.name}
                className="grid__img"
              />
              <S.Div className="cart__info">
                <S.Label>{cartItem.name}</S.Label>
                <S.Span>$ {cartItem.price}</S.Span>
                <S.Div className="cart__menu">
                  <S.Button
                    className="cart__btn"
                    onClick={() => handleIncCartQty(cartItem.id)}
                  >
                    <S.Img src={A.btn1} alt="btn1" />
                  </S.Button>
                  <S.H1 className="cart__qty">{cartItem?.quantity}</S.H1>
                  <S.Button
                    className="cart__btn"
                    onClick={() => handleDecCartQty(cartItem.id)}
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
          <S.Button className="cart__checkout" onClick={() => requestPay()}>
            Check out
          </S.Button>
        </S.Div>
      </S.Section>
    </S.Container>
  );
};

export default Carts;
