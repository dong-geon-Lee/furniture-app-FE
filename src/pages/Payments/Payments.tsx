import axios from "axios";

import TopHeader from "../../components/TopHeader/TopHeader";

import * as S from "./styles";
import * as A from "../../assets";
import { useEffect, useState } from "react";

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

  const randomNum = Math.floor(Math.random() * 90000000) + 1;
  const formattedPrice = new Intl.NumberFormat("ko-KR");

  const requestPay = () => {
    const { IMP }: any = window;

    IMP.init("imp91560302");
    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card", // 생략가
        merchant_uid: `order_no_${randomNum}`, // 상점에서 생성한 고유 주문번호
        name: "주문명:결제테스트",
        amount: 1004,
        buyer_name: "구매자이름",
        buyer_tel: "010-1234-5678",
        buyer_email: "test@portone.io",
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
      const response = await axios.get("http://localhost:5000/shippings");
      setShippingInfo(response.data[0]);
    };

    fetchData();
  }, []);

  console.log(shippingInfo);

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
            <S.H1>{formattedPrice.format(shippingInfo?.productPrice)} 원</S.H1>
          </S.Div>
          <S.Div className="payment__box">
            <S.P>배송비</S.P>
            <S.H1>{formattedPrice.format(shippingInfo?.productShip)} 원</S.H1>
          </S.Div>
          <hr />
          <S.Div className="payment__box last">
            <S.P>총 결제금액</S.P>
            <h1>{formattedPrice.format(shippingInfo?.productTotal)} 원</h1>
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
