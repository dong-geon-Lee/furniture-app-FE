import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";

const TopHeader = ({ path, title }: any) => {
  const navigate = useNavigate();
  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  return (
    <>
      <S.Div className="header">
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>

      <S.Div className="box">
        <S.Img
          src={A.back2}
          alt="back2"
          className="logo"
          onClick={() => navigate(`/${path}`)}
        />
        <S.Div>
          <S.H1 className="title">{title}</S.H1>
        </S.Div>
        <S.Div />
      </S.Div>
    </>
  );
};

export default TopHeader;
