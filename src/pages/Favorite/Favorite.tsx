import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";
import Navigation from "../../components/Navigation/Navigation";

const Favorite = () => {
  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  return (
    <S.Container>
      <S.Div className="header">
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>

      <S.Div className="box">
        <S.Img src={A.search} alt="search" className="logo" />
        <S.Div>
          <S.H1>Favorites</S.H1>
        </S.Div>
        <S.Img src={A.cart} alt="cart" className="logo" />
      </S.Div>

      <S.Section className="favorite__list">
        <S.Main className="grid__box">
          <S.Img src={A.favor__desk} alt="favor__desk" className="grid__img" />
          <S.Div className="favorite__info">
            <S.Label>Coffee Table</S.Label>
            <S.Span>$ 50.00</S.Span>
          </S.Div>
          <S.Div className="favorite__btns">
            <S.Button className="xIcon__btn">
              <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
            </S.Button>
            <S.Button className="shopping__btn">
              <S.Img src={A.shopping} alt="shopping" className="shopping" />
            </S.Button>
          </S.Div>
        </S.Main>

        <S.Main className="grid__box">
          <S.Img src={A.favor__desk2} alt="favor__desk" className="grid__img" />
          <S.Div className="favorite__info">
            <S.Label>Coffee Chair</S.Label>
            <S.Span>$ 20.00</S.Span>
          </S.Div>
          <S.Div className="favorite__btns">
            <S.Button className="xIcon__btn">
              <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
            </S.Button>
            <S.Button className="shopping__btn">
              <S.Img src={A.shopping} alt="shopping" className="shopping" />
            </S.Button>
          </S.Div>
        </S.Main>

        <S.Main className="grid__box">
          <S.Img src={A.favor__desk3} alt="favor__desk" className="grid__img" />
          <S.Div className="favorite__info">
            <S.Label>Minimal Stand</S.Label>
            <S.Span>$ 25.00</S.Span>
          </S.Div>
          <S.Div className="favorite__btns">
            <S.Button className="xIcon__btn">
              <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
            </S.Button>
            <S.Button className="shopping__btn">
              <S.Img src={A.shopping} alt="shopping" className="shopping" />
            </S.Button>
          </S.Div>
        </S.Main>

        <S.Main className="grid__box">
          <S.Img src={A.favor__desk4} alt="favor__desk" className="grid__img" />
          <S.Div className="favorite__info">
            <S.Label>Minimal Desk</S.Label>
            <S.Span>$ 50.00</S.Span>
          </S.Div>
          <S.Div className="favorite__btns">
            <S.Button className="xIcon__btn">
              <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
            </S.Button>
            <S.Button className="shopping__btn">
              <S.Img src={A.shopping} alt="shopping" className="shopping" />
            </S.Button>
          </S.Div>
        </S.Main>

        <S.Main className="grid__box">
          <S.Img src={A.favor__desk5} alt="favor__desk" className="grid__img" />
          <S.Div className="favorite__info">
            <S.Label>Minimal Lamp</S.Label>
            <S.Span>$ 12.00</S.Span>
          </S.Div>
          <S.Div className="favorite__btns">
            <S.Button className="xIcon__btn">
              <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
            </S.Button>
            <S.Button className="shopping__btn">
              <S.Img src={A.shopping} alt="shopping" className="shopping" />
            </S.Button>
          </S.Div>
        </S.Main>
        <S.Button className="cart__btn">Add all to my cart</S.Button>
      </S.Section>

      <Navigation />
    </S.Container>
  );
};

export default Favorite;
