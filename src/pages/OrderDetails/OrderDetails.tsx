import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { getOrderInfo } from "../../store/features/orders/ordersSlice";

import axios from "axios";
import TopHeader from "../../components/TopHeader/TopHeader";

import * as S from "./styles";

const OrderDetails = () => {
  const { orderInfo } = useSelector((state: RootState) => state.orders);
  const { shipping } = useSelector((state: RootState) => state.carts);

  const dispatch = useDispatch();
  const location = useLocation();
  const order = location.state;

  const formattedPrice = new Intl.NumberFormat("ko-KR");
  const { order: orderData } = orderInfo;

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "년 " + month + "월 " + day + "일";
  };

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await axios.get(
        `http://localhost:5000/orderDetails/${order.id}`
      );
      const [datas] = response.data;
      dispatch(getOrderInfo(datas));
    };
    fetchDatas();
  }, [dispatch, order.id]);

  return (
    <S.Container>
      <TopHeader path="orders" title="주문상세" />
      <S.Section className="order__header">
        <S.H1 className="order__text margin">주문 정보</S.H1>
        <S.Div className="header__box">
          <S.H2 className="header__text">주문일자</S.H2>
          <S.H2 className="header__text bold">
            {formatTimestamp(orderData?.paidAt)}
          </S.H2>
        </S.Div>
        <S.Div className="header__box">
          <S.H2 className="header__text">주문번호</S.H2>
          <S.H2 className="header__text bold">{orderData?.impUid}</S.H2>
        </S.Div>
        <S.Div className="header__box">
          <S.H2 className="header__text">주문자</S.H2>
          <S.H2 className="header__text bold">{orderData?.buyerName}</S.H2>
        </S.Div>
        <S.Div className="header__box">
          <S.H2 className="header__text">연락처</S.H2>
          <S.H2 className="header__text bold">{orderData?.buyerTel}</S.H2>
        </S.Div>
        <S.Div className="header__box">
          <S.H2 className="header__text">이메일</S.H2>
          <S.H2 className="header__text bold">{orderData?.buyerEmail}</S.H2>
        </S.Div>
      </S.Section>

      <S.Section className="order__info">
        <S.Div className="order__height">
          <S.H1 className="order__text">상품 정보</S.H1>
          {orderInfo?.cartItems?.map((item: any) => (
            <S.Div className="orders__box" key={item.id}>
              <S.Img src={item.product.imageURL} />
              <S.Div className="orders__contents">
                <S.H1>{item.product.name}</S.H1>
                <S.Div className="grid__box">
                  <S.H2>{formattedPrice.format(item.product.price)}원</S.H2>
                  <S.H2 className="bold">{item.quantity}개</S.H2>
                </S.Div>
              </S.Div>
              <S.H2 className="ship__text">배송완료</S.H2>
            </S.Div>
          ))}
        </S.Div>
        <S.Hr />
        <S.Main>
          <S.H2 className="orders__left">상품가격</S.H2>
          <S.H2 className="orders__right bold">
            {formattedPrice.format(order.paidAmount - shipping)}원
          </S.H2>
          <S.H2 className="orders__left">배송비</S.H2>
          <S.H2 className="orders__right bold">
            {formattedPrice.format(shipping)}원
          </S.H2>
          <S.H2 className="orders__left">총 결제금액</S.H2>
          <S.H2 className="orders__right bold">
            {formattedPrice.format(order.paidAmount)}원
          </S.H2>
        </S.Main>
        <S.Hr />
      </S.Section>
    </S.Container>
  );
};

export default OrderDetails;
