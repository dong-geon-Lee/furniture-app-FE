import { useNavigate } from "react-router-dom";
import { ITopHeaderProps } from "../../@types";

import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";

const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);

const TopHeader = ({ path, title, location }: ITopHeaderProps) => {
  const navigate = useNavigate();
  const koreanTime = koreanTimeFormatter.format(new Date());

  return (
    <>
      <S.Div className="header">
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>

      <S.Div className="box">
        {title !== "congrats" && (
          <>
            <S.Img
              src={A.search}
              alt="back2"
              className="logo"
              onClick={() => navigate(`/${path}`)}
            />
            <S.Div>
              <S.H1 className="title">{title}</S.H1>
            </S.Div>
          </>
        )}

        {location.pathname === "/profile" ? (
          <S.Img
            src={A.logout}
            alt={A.logout}
            className="logo"
            onClick={() => navigate(`/login`)}
          />
        ) : (
          <S.Div />
        )}
      </S.Div>
    </>
  );
};

export default TopHeader;
