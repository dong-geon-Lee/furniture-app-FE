import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import * as A from "../../assets";

const Boarding = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Img src={A.boarding} alt="boarding" />
      <S.Div>
        <S.H1>Make your</S.H1>
        <S.H1 className="h1">Home Beautiful</S.H1>
        <S.P>
          The best simple place where you discover most wonderful furnitures and
          make your home beautiful
        </S.P>
        <S.Button onClick={() => navigate("/login")}>Get started</S.Button>
      </S.Div>
    </S.Container>
  );
};

export default Boarding;
