import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  decreasePrice,
  increasePrice,
  removeItem,
} from "../../store/features/carts/cartsSlice";
import { ICartItem } from "../../@types";

const Carts = () => {
  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.carts
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartItems = (id: number) => {
    const cartLists = cartItems.filter(
      (cartItem: ICartItem) => cartItem.id !== id
    );
    dispatch(removeItem(cartLists));

    const seletedItem = cartItems.find(
      (cartItem: ICartItem) => cartItem.id === id
    );
    if (seletedItem) dispatch(decreasePrice(parseInt(seletedItem.price)));
  };

  // const handleCartQty = () => {};

  return (
    <S.Container>
      <S.Div className="header">
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>

      <S.Div className="box">
        <S.Img
          src={A.back2}
          alt="back2"
          className="logo"
          onClick={() => navigate("/home")}
        />
        <S.Div>
          <S.H1 className="title">My cart</S.H1>
        </S.Div>
        <S.Div />
      </S.Div>

      <S.Section className="cart__list">
        {cartItems.map((cartItem) => (
          <S.Box key={cartItem.id}>
            <S.Main className="grid__box">
              <S.Img
                src={cartItem.imageURL}
                alt={cartItem.name}
                className="grid__img"
              />
              <S.Div className="cart__info">
                <S.Label>{cartItem.name}</S.Label>
                <S.Span>$ {cartItem.price}</S.Span>
                <S.Div className="cart__menu">
                  <S.Button
                    className="cart__btn"
                    onClick={() => dispatch(increasePrice(+cartItem.price))}
                  >
                    <S.Img src={A.btn1} alt="btn1" />
                  </S.Button>
                  <S.H1 className="cart__qty">01</S.H1>
                  <S.Button
                    className="cart__btn"
                    onClick={() => dispatch(decreasePrice(+cartItem.price))}
                  >
                    <S.Img src={A.btn2} alt="btn2" />
                  </S.Button>
                </S.Div>
              </S.Div>
              <S.Div
                className="cart__btns"
                onClick={() => handleCartItems(cartItem.id)}
              >
                <S.Button className="xIcon__btn">
                  <S.Img src={A.xIcon} alt="xIcon" className="xIcon" />
                </S.Button>
              </S.Div>
            </S.Main>
            <S.Hr />
          </S.Box>
        ))}
        <S.Div className="cart__results">
          <S.Div className="cart__total">
            <S.H2>Total:</S.H2>
            <S.H1 className="cart__price">$ {totalPrice}</S.H1>
          </S.Div>
          <S.Button className="cart__checkout">Check out</S.Button>
        </S.Div>
      </S.Section>
    </S.Container>
  );
};

export default Carts;
