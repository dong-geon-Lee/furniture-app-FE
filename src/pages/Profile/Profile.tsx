import { useLocation } from "react-router-dom";

import TopHeader from "../../components/TopHeader/TopHeader";
import Navigation from "../../components/Navigation/Navigation";

import * as S from "./styles";
import * as A from "../../assets";

const Profile = () => {
  const location = useLocation();

  return (
    <S.Container>
      <TopHeader title="프로필" path="home" location={location} />
      <S.Section className="profile__header">
        <S.Img src={A.avarta} alt={A.avarta} />
        <S.Div>
          <S.H1>Bruno Pham</S.H1>
          <S.P>bruno203@gmail.com</S.P>
        </S.Div>
      </S.Section>
      <S.Section className="profile__wrapper">
        <S.Div>
          <S.H1>My orders</S.H1>
          <S.P>Already have 10 orders</S.P>
        </S.Div>
        <S.Img src={A.right_arrow} alt={A.right_arrow} className="right-logo" />
      </S.Section>
      <S.Section className="profile__wrapper">
        <S.Div>
          <S.H1>Shipping Addresses</S.H1>
          <S.P>03 Addresses</S.P>
        </S.Div>
        <S.Img src={A.right_arrow} alt={A.right_arrow} className="right-logo" />
      </S.Section>
      <S.Section className="profile__wrapper">
        <S.Div>
          <S.H1>Payment Method</S.H1>
          <S.P>You have 2 cards</S.P>
        </S.Div>
        <S.Img src={A.right_arrow} alt={A.right_arrow} className="right-logo" />
      </S.Section>
      <S.Section className="profile__wrapper">
        <S.Div>
          <S.H1>My reviews</S.H1>
          <S.P>Reviews for 5 items</S.P>
        </S.Div>
        <S.Img src={A.right_arrow} alt={A.right_arrow} className="right-logo" />
      </S.Section>
      <S.Section className="profile__wrapper">
        <S.Div>
          <S.H1>Setting</S.H1>
          <S.P>Notification, Password, FAQ, Contact</S.P>
        </S.Div>
        <S.Img src={A.right_arrow} alt={A.right_arrow} className="right-logo" />
      </S.Section>
      <Navigation />
    </S.Container>
  );
};

export default Profile;
