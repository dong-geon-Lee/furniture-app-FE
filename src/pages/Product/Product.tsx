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
        <S.P className="time">{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" className="container1" />
      </S.Div>
      <S.Div className="product__image">
        <S.Image $image={A.product1} />
        <S.Img src={A.back} alt="product1" className="product1" />
      </S.Div>
      <S.Div className="product__info">
        <S.H1 className="product__title">Minimal Stand</S.H1>
        <S.Div className="product__box">
          <S.H1 className="product__price">$ 50</S.H1>
          <S.Div className="product__qty">
            <S.Button className="product__count">
              <S.Img src={A.btn1} alt="btn1" />
            </S.Button>
            <S.H2 className="product__text">01</S.H2>
            <S.Button className="product__count">
              <S.Img src={A.btn2} alt="btn2" />
            </S.Button>
          </S.Div>
        </S.Div>
        <S.Div className="review">
          <S.Img src={A.star2} alt="star2" />
          <S.H3>4.5</S.H3>
          <S.P className="product__review">(50 reviews)</S.P>
        </S.Div>
        <S.Div>
          <S.P className="description">
            Minimal Stand is made of by natural wood. The design that is very
            simple and minimal. This is truly one of the best furnitures in any
            family for now. With 3 different colors, you can easily select the
            best match for your home.
          </S.P>
          <S.Div className="product__click">
            <S.Button className="product__markers">
              <S.Img src={A.markers} alt="markers" className="markers" />
            </S.Button>
            <S.Button className="product__cart">Add to cart</S.Button>
          </S.Div>
        </S.Div>
      </S.Div>
    </S.Container>
  );
};

export default Product;
