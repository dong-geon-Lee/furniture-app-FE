import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import {
  getItems,
  removeItem,
  totalCart,
  totalCartQty,
} from "../../store/features/carts/cartsSlice";
import { getShippings } from "../../store/features/shippings/shippingsSlice";

import axios from "axios";
import TopHeader from "../../components/TopHeader/TopHeader";

import * as S from "./styles";
import * as A from "../../assets";
import { getUser } from "../../store/features/users/usersSlice";

const Payment = () => {
  const [shippingInfo, setShippingInfo] = useState({
    id: "",
    address: "",
    method: "",
    postcode: 0,
    productPrice: 0,
    productShip: 0,
    productTotal: 0,
    userEmail: "",
    userName: "",
    userPhone: "",
  });

  const navigate = useNavigate();

  const { token, user } = useSelector((state: RootState) => state.users);
  const { shippingInfo: shipInfo } = useSelector(
    (state: RootState) => state.shippings
  );
  const { totalPrice, shipping, totalQty, cartItems } = useSelector(
    (state: RootState) => state.carts
  );

  console.log(cartItems, totalPrice, shipping, user);

  const dispatch = useDispatch();
  const randomNum = Math.floor(Math.random() * 1000000);
  const formattedPrice = new Intl.NumberFormat("ko-KR");

  const requestPay = () => {
    const { IMP }: any = window;
    const datas = {
      pg: "kakaopay.TC0ONETIME",
      pay_method: "card",
      merchant_uid: `order_no_${shipInfo?.id + randomNum}`,
      name: "주문명:결제테스트",
      amount: `${totalPrice + shipping}`,
      buyer_name: `${shipInfo?.userName}`,
      buyer_tel: `${shipInfo?.userPhone}`,
      buyer_email: `${shipInfo?.userEmail}`,
      buyer_addr: `${shipInfo?.address}`,
      buyer_postcode: `${shipInfo?.postcode}`,
    };

    IMP.init("imp91560302");
    IMP.request_pay(datas, async function (rsp: any) {
      if (rsp.success) {
        const datas = {
          impUid: rsp.imp_uid,
          merchantUid: rsp.merchant_uid,
          buyerAddr: rsp.buyer_addr,
          buyerEmail: rsp.buyer_email,
          buyerName: rsp.buyer_name,
          buyerTel: rsp.buyer_tel,
          buyerPostcode: rsp.buyer_postcode,
          paidAmount: rsp.paid_amount,
          paidAt: rsp.paid_at,
          payMethod: rsp.pay_method,
          status: rsp.status,
          userId: shipInfo.user.id,
          quantity: totalQty,
        };

        const response = await axios.post(
          "http://localhost:5000/orders",
          datas
        );

        if (response.data) {
          console.log(response.data.id, "데이터 이쌎ㄴㅎ아ㄴ");
          await axios.post("http://localhost:5000/orderDetails", {
            userId: user.id,
            cartItems,
            quantity: response.data.quantity,
            orderId: response.data.id,
          });
        }

        alert("결제가 완료되었습니다");

        await axios.delete(
          `http://localhost:5000/carts/me/${shipInfo.user?.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch(removeItem([]));
        dispatch(totalCart(0));
        dispatch(totalCartQty(0));

        await axios.delete(`http://localhost:5000/shippings/${shipInfo.id}`);
        dispatch(getShippings(null));

        navigate("/congrats");
      } else {
        alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
      }
    });
  };

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
      const response = await axios.get("http://localhost:5000/shippings/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getShippings(response.data));
      setShippingInfo(response.data);
    };
    fetchData();
  }, [token, dispatch]);

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await axios.get("http://localhost:5000/carts/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const total = response.data.reduce(
        (acc: number, cur: any) => acc + cur.product.price * cur.quantity,
        0
      );

      const totalQty = response.data.reduce(
        (acc: number, cur: any) => acc + cur.quantity,
        0
      );

      dispatch(getItems(response.data));
      dispatch(totalCart(total));
      dispatch(totalCartQty(totalQty));
    };
    fetchDatas();
  }, [dispatch, totalPrice, token]);

  return (
    <S.Container>
      <TopHeader path="shipping" title="결제하기" />

      <S.Section className="payment__address">
        <S.Div className="payment__header">
          <S.H1 className="payment__title">주문자 정보</S.H1>
        </S.Div>
        <S.Div className="payment__userInfo">
          <S.Div className="payment__header">
            <S.P>{shippingInfo?.userName}</S.P>
            <S.Img src={A.edit} alt={A.edit} className="edit__logo" />
          </S.Div>
          <S.P>{shippingInfo?.userPhone}</S.P>
          <S.P>{shippingInfo?.userEmail}</S.P>
        </S.Div>
      </S.Section>

      <S.Section className="payment__address">
        <S.Div className="payment__header">
          <S.H1 className="payment__title">배송 정보</S.H1>
        </S.Div>
        <S.Div className="payment__contents">
          <S.Div className="payment__header">
            <S.P className="payment__name">{shippingInfo?.userName}</S.P>
            <S.Img src={A.edit} alt={A.edit} className="edit__logo" />
          </S.Div>
          <S.P>{shippingInfo?.userPhone}</S.P>
          <S.P>{shippingInfo?.address}</S.P>
          <S.P>{shippingInfo?.postcode}</S.P>
          <S.Div className="payment__select">
            <S.P className="payment__memo">배송 메모</S.P>
            <S.Select>
              <option value="1">배송메모를 선택해주세요.</option>
              <option value="2">문 앞에 놓아주세요</option>
              <option value="3">경비실에 맡겨주세요</option>
              <option value="4">배송 전에 전화주세요</option>
            </S.Select>
          </S.Div>
        </S.Div>
      </S.Section>

      <S.Section className="payment__address">
        <S.Div className="payment__header">
          <S.H1 className="payment__title">결제 정보</S.H1>
        </S.Div>
        <S.Div className="payment__results">
          <S.Div className="payment__box">
            <S.P>상품가격</S.P>
            <S.H1>{formattedPrice.format(totalPrice)} 원</S.H1>
          </S.Div>
          <S.Div className="payment__box">
            <S.P>배송비</S.P>
            <S.H1>{formattedPrice.format(shipping)} 원</S.H1>
          </S.Div>
          <hr />
          <S.Div className="payment__box last">
            <S.P>총 결제금액</S.P>
            <h1>{formattedPrice.format(totalPrice + shipping)} 원</h1>
          </S.Div>
        </S.Div>
      </S.Section>

      <S.Section className="payment__address">
        <S.Button onClick={() => requestPay()}>
          <S.Img
            src="https://img.etoday.co.kr/pto_db/2021/09/20210909134435_1664745_534_294.jpg"
            alt="kakao__btn"
            className="kakao__btn"
          />
        </S.Button>
      </S.Section>
    </S.Container>
  );
};

export default Payment;
