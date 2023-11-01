import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";

const Carts = () => {
  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  return (
    <S.Container>
      <S.Div className="header">
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>

      <S.Div className="box">
        <S.Img src={A.back2} alt="back2" className="logo" />
        <S.Div>
          <S.H1 className="title">My cart</S.H1>
        </S.Div>
        <S.Div />
      </S.Div>

      <S.Section className="cart__list">
        <S.Main className="grid__box">
          <S.Img src={A.favor__desk3} alt="favor__desk" className="grid__img" />
          <S.Div className="cart__info">
            <S.Label>Minimal Stand</S.Label>
            <S.Span>$ 25.00</S.Span>
            <S.Div className="cart__menu">
              <S.Button className="cart__btn">
                <S.Img src={A.btn1} alt="btn1" />
              </S.Button>
              <S.H1 className="cart__qty">01</S.H1>
              <S.Button className="cart__btn">
                <S.Img src={A.btn2} alt="btn2" />
              </S.Button>
            </S.Div>
          </S.Div>
          <S.Div className="cart__btns">
            <S.Button className="xIcon__btn">
              <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
            </S.Button>
          </S.Div>
        </S.Main>
        <S.Hr />

        <S.Main className="grid__box">
          <S.Img src={A.favor__desk} alt="favor__desk" className="grid__img" />
          <S.Div className="cart__info">
            <S.Label>Coffee Table</S.Label>
            <S.Span>$ 20.00</S.Span>
            <S.Div className="cart__menu">
              <S.Button className="cart__btn">
                <S.Img src={A.btn1} alt="btn1" />
              </S.Button>
              <S.H1 className="cart__qty">01</S.H1>
              <S.Button className="cart__btn">
                <S.Img src={A.btn2} alt="btn2" />
              </S.Button>
            </S.Div>
          </S.Div>
          <S.Div className="cart__btns">
            <S.Button className="xIcon__btn">
              <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
            </S.Button>
          </S.Div>
        </S.Main>
        <S.Hr />

        <S.Main className="grid__box">
          <S.Img
            src={A.favor__desk4}
            alt="favor__desk4"
            className="grid__img"
          />
          <S.Div className="cart__info">
            <S.Label>Minimal Desk</S.Label>
            <S.Span>$ 50.00</S.Span>
            <S.Div className="cart__menu">
              <S.Button className="cart__btn">
                <S.Img src={A.btn1} alt="btn1" />
              </S.Button>
              <S.H1 className="cart__qty">01</S.H1>
              <S.Button className="cart__btn">
                <S.Img src={A.btn2} alt="btn2" />
              </S.Button>
            </S.Div>
          </S.Div>
          <S.Div className="cart__btns">
            <S.Button className="xIcon__btn">
              <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
            </S.Button>
          </S.Div>
        </S.Main>
        <S.Hr />

        <S.Div className="cart__results">
          <S.Div className="cart__total">
            <S.H2>Total:</S.H2>
            <S.H1 className="cart__price">$ 95.00</S.H1>
          </S.Div>
          <S.Button className="cart__checkout">Check out</S.Button>
        </S.Div>
      </S.Section>

      {/* <S.Nav className="nav">
        <S.Div className="icon__box">
          <S.Img src={A.home} alt="home" className="navIcon" />
        </S.Div>
        <S.Div className="icon__box">
          <S.Img src={A.marker} alt="marker" className="navIcon" />
        </S.Div>
        <S.Div className="icon__box">
          <S.Img src={A.bell} alt="bell" className="navIcon" />
        </S.Div>
        <S.Div className="icon__box">
          <S.Img src={A.bi} alt="bi" className="navIcon" />
        </S.Div>
      </S.Nav> */}
    </S.Container>
  );
};

export default Carts;
