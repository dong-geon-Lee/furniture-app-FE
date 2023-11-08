import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";
import { IHeaderClassProps } from "../../@types";

const Header = ({ activeClass }: IHeaderClassProps) => {
  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  return (
    <S.Div className={`${activeClass}`}>
      <S.P className="time">{koreanTime}</S.P>
      <S.Img src={A.container} alt="container" />
    </S.Div>
  );
};

export default Header;
