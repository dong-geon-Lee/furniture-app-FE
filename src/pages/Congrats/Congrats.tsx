import TopHeader from "../../components/TopHeader/TopHeader";

import * as S from "./styles";
import * as A from "../../assets";

const Congrats = () => {
  return (
    <S.Container>
      <TopHeader title="congrats" />
      <S.H1>Success!</S.H1>
      <S.Div className="congrats__logo">
        <S.Img src={A.groups} alt={A.groups} className="groups" />
        <S.Img src={A.circle} alt={A.circle} className="circle" />
        <S.Img src={A.success} alt={A.success} className="success" />
      </S.Div>
      <S.P>
        Your order will be delivered soon. Thank you for choosing our app!
      </S.P>
      <S.Div>
        <S.Button className="order--btn">Track your orders</S.Button>
        <S.Button className="back--btn">Back to Home</S.Button>
      </S.Div>
    </S.Container>
  );
};

export default Congrats;
