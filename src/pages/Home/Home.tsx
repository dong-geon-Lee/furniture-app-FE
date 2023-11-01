import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";

const Home = () => {
  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  return (
    <S.Container>
      <S.Div>
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>

      <S.ImgBox>
        <S.Img src={A.search} alt="search" />
        <S.TextBox>
          <S.H1>Make home</S.H1>
          <S.Title>Beautiful</S.Title>
        </S.TextBox>
        <S.Img src={A.cart} alt="cart" />
      </S.ImgBox>

      <S.LogoBox>
        <S.Box>
          <S.Logo src={A.star} alt="star" className="star" />
          <S.Text>Popular</S.Text>
        </S.Box>
        <S.Box>
          <S.Logo src={A.chair} alt="chair" />
          <S.Text>Chair</S.Text>
        </S.Box>
        <S.Box>
          <S.Logo src={A.table} alt="table" />
          <S.Text>Table</S.Text>
        </S.Box>
        <S.Box>
          <S.Logo src={A.sofa} alt="sofa" />
          <S.Text>Armchair</S.Text>
        </S.Box>
        <S.Box>
          <S.Logo src={A.bed} alt="bed" />
          <S.Text>Bed</S.Text>
        </S.Box>
      </S.LogoBox>

      <S.Grid>
        <S.GridItem>
          <S.GridImg src={A.jonny} alt="jonny" />
          <S.GridLabel>Black Simple Lamp</S.GridLabel>
          <S.GridText>$ 12.00</S.GridText>
          <S.GridLogo src={A.frame} alt="frame" />
        </S.GridItem>
        <S.GridItem>
          <S.GridImg src={A.desk} alt="desk" />
          <S.GridLabel>Minimal Stand</S.GridLabel>
          <S.GridText>$ 25.00</S.GridText>
          <S.GridLogo src={A.frame} alt="frame" />
        </S.GridItem>
        <S.GridItem>
          <S.GridImg src={A.desk2} alt="desk2" />
          <S.GridLabel>Coffee Chair</S.GridLabel>
          <S.GridText>$ 20.00</S.GridText>
          <S.GridLogo src={A.frame} alt="frame" />
        </S.GridItem>
        <S.GridItem>
          <S.GridImg src={A.desk3} alt="desk3" />
          <S.GridLabel>Simple Desk</S.GridLabel>
          <S.GridText>$ 50.00</S.GridText>
          <S.GridLogo src={A.frame} alt="frame" />
        </S.GridItem>
      </S.Grid>

      <S.NavBar>
        <S.NavBox>
          <S.ImgLogo src={A.home} alt="home" />
        </S.NavBox>
        <S.NavBox>
          <S.ImgLogo src={A.marker} alt="marker" />
        </S.NavBox>
        <S.NavBox>
          <S.ImgLogo src={A.bell} alt="bell" />
        </S.NavBox>
        <S.NavBox>
          <S.ImgLogo src={A.bi} alt="bi" />
        </S.NavBox>
      </S.NavBar>
    </S.Container>
  );
};

export default Home;