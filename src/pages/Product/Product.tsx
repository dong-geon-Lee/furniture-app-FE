import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";
// import { useLocation, useParams } from "react-router-dom";

const Product = () => {
  // const params = useParams();
  // const location = useLocation();

  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  return (
    <S.Container>
      <S.Div className="header">
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" className="container1" />
      </S.Div>
      <S.Div className="product__image">
        <S.Image $image={A.product1} />
        <S.Img src={A.back} alt="product1" className="product1" />
      </S.Div>
      <S.Div className="product__info">
        <S.H1 className="title">Minimal Stand</S.H1>
        <S.Div>
          <h1>$ 50</h1>
          <div>
            <button>+</button>
            <h1>01</h1>
            <button>-</button>
          </div>
        </S.Div>
      </S.Div>
    </S.Container>
  );
};

export default Product;
