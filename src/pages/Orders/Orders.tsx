import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const formattedPrice = new Intl.NumberFormat("ko-KR");

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "년 " + month + "월 " + day + "일";
  };

  const handleOrders = (id: number) => {
    const data = orders.find((order: any) => order.id === id);
    navigate(`${id}`, { state: data });
  };

  const handleDeleteOrders = async (id: number) => {
    const isConfirmed = window.confirm(
      `삭제된 내역은 복구할 수 없습니다.
정말로 삭제하시겠습니까?`
    );

    if (isConfirmed) {
      alert("해당 내역이 삭제되었습니다");
      await axios.delete(`http://localhost:5000/orders/${id}`);
      const datas = orders.filter((order: any) => order.id !== id);
      dispatch(getOrders(datas));
    }
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
              <S.Img
                src={A.xIcon}
                alt={A.xIcon}
                onClick={() => handleDeleteOrders(order.id)}
              />
            </S.Div>
            <S.H2>{formatTimestamp(order.paidAt)}</S.H2>
            <S.Div className="orders__contents">
              <S.Label>
                주문수량: <S.Span>{order.quantity}개</S.Span>
              </S.Label>
              <S.Label>
                <S.Span>{formattedPrice.format(order.paidAmount)}원</S.Span>
              </S.Label>
            </S.Div>
            <S.Div className="orders__results">
              <S.Button onClick={() => handleOrders(order.id)}>
                주문상세
              </S.Button>
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
