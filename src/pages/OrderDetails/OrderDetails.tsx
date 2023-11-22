import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./styles";
import TopHeader from "../../components/TopHeader/TopHeader";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const OrderDetails = () => {
  const { token } = useSelector((state: RootState) => state.users);
  const location = useLocation();
  const order = location.state;
  const formattedPrice = new Intl.NumberFormat("ko-KR");

  console.log(order, location.pathname);

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await axios.get(
        `http://localhost:5000/orderDetails/${order.id}`
      );
      console.log(response.data);
    };
    fetchDatas();
  }, [order.id]);

  return (
    <S.Container>
      <TopHeader path="orders" title="주문상세" />
      <S.Section>
        <S.Div className="orders__box" key={order.id}>
          <S.Div className="orders__header">
            <S.H1>{order.impUid}</S.H1>
            {/* <S.Img src={A.xIcon} alt={A.xIcon} /> */}
          </S.Div>

          <S.Div className="orders__contents">
            <S.Label>
              주문수량: <S.Span>{order.quantity}개</S.Span>
            </S.Label>
            <S.Label>
              <S.Span>{formattedPrice.format(order.paidAmount)}원</S.Span>
            </S.Label>
          </S.Div>
          <S.Div className="orders__results">
            <S.H3>
              {order.status === "paid" ? "구매확정완료" : "승인대기중"}
            </S.H3>
          </S.Div>
        </S.Div>
      </S.Section>
    </S.Container>
  );
};

export default OrderDetails;
