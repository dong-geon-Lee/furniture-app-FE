import { IPrductButtonProps } from "../../@types";
import * as S from "./styles";

const ProductButton = ({
  handleCategorySelect,
  selectedCategory,
  image,
  categoryName,
}: IPrductButtonProps) => {
  return (
    <S.Box
      onClick={() => handleCategorySelect(categoryName)}
      className={selectedCategory === categoryName ? "active" : ""}
    >
      <S.Logo src={image} alt={image} />
      <S.Text>{categoryName}</S.Text>
    </S.Box>
  );
};

export default ProductButton;
