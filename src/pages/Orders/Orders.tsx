import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { getOrders } from "../../store/features/orders/ordersSlice";

import TopHeader from "../../components/TopHeader/TopHeader";
import axios from "axios";

import * as S from "./styles";
import * as A from "../../assets";

const Orders = () => {
  const { token } = useSelector((state: RootState) => state.users);
  const { orders } = useSelector((state: RootState) => state.orders);

  const dispatch = useDispatch();
  const formattedPrice = new Intl.NumberFormat("ko-KR");

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "년 " + month + "월 " + day + "일";
  };

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await axios.get("http://localhost:5000/orders/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getOrders(response.data));
    };
    fetchDatas();
  }, [token, dispatch]);

  return (
    <S.Container>
      <TopHeader title="My orders" path="home" />
      <S.Section>
        {orders.map((order: any) => (
          <S.Div className="orders__box" key={order.id}>
            <S.Div className="orders__header">
              <S.H1>{order.impUid}</S.H1>
              <S.Img src={A.xIcon} alt={A.xIcon} />
            </S.Div>
            <S.H2>{formatTimestamp(order.paidAt)}</S.H2>
            <S.Div className="orders__contents">
              <S.Label>
                주문수량: <S.Span>1개</S.Span>
              </S.Label>
              <S.Label>
                <S.Span>{formattedPrice.format(order.paidAmount)}원</S.Span>
              </S.Label>
            </S.Div>
            <S.Div className="orders__results">
              <S.Button>주문상세</S.Button>
              <S.H3>
                {order.status === "paid" ? "구매확정완료" : "승인대기중"}
              </S.H3>
            </S.Div>
          </S.Div>
        ))}
      </S.Section>
    </S.Container>
  );
};

export default Orders;
