import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";
import { useLocation } from "react-router-dom";

const Product = () => {
  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());
  const location = useLocation();

  const items = location.state;
  console.log(items);

  return (
    <S.Container>
      <S.Div className="header">
        <S.P className="time">{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" className="container1" />
      </S.Div>
      <S.Div className="product__image">
        <S.ProductImage $image={items.imageURL} />
        <S.Img src={A.back} alt="product1" className="product1" />
      </S.Div>
      <S.Div className="product__info">
        <S.H1 className="product__title">{items.name}</S.H1>
        <S.Div className="product__box">
          <S.H1 className="product__price">$ {items.price}</S.H1>
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
            {items.name} {items.description}
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
