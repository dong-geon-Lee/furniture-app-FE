import AdminProductForm from "../../components/AdminProductForm/AdminProductForm";
import AdminProductList from "../../components/AdminProductList/AdminProductList";
import * as S from "./styles";

const Admin = () => {
  return (
    <S.Container>
      <AdminProductForm />
      <AdminProductList />
    </S.Container>
  );
};

export default Admin;
