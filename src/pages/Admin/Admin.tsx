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

{
  // const handleUpload = async () => {
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append("file", selectedFile);
  //     try {
  //       await axios.post("http://localhost:5000/upload", formData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       });
  //       alert("이미지가 업로드되었습니다");
  //     } catch (error) {
  //       alert("이미지 업로드에 실패했습니다");
  //     }
  //   }
  // };
  /* {items
        .slice()
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map((item) => (
          <div key={item.id} style={{ width: "10rem", height: "10rem" }}>
            <img
              src={item.imageURL}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
            <div>
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <h2>{item.price}</h2>
            </div>
          </div>
        ))} */
}
