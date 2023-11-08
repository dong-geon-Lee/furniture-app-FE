import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProductProps } from "../../@types";

import axios from "axios";

import ProductButton from "../../components/ProductButton/ProductButton";
import Header from "../../components/Header/Header";

import * as S from "./styles";
import * as A from "../../assets";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const navigate = useNavigate();

  const handleProductItem = (id: number) => {
    const selectedItems = products.find((item) => item.id === id);
    navigate(`/home/${id}`, { state: selectedItems });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "All"
        ? products
        : products.filter((product) => product.category === category)
    );
  };

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const datas = response.data;
        setProducts(datas);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <Header activeClass="header__normal" />
      <S.ImgBox>
        <S.Img src={A.search} alt="search" />
        <S.TextBox>
          <S.H1>Make home</S.H1>
          <S.Title>Beautiful</S.Title>
        </S.TextBox>
        <S.Img src={A.cart} alt="cart" />
      </S.ImgBox>

      <S.LogoBox>
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.star}
          categoryName="All"
        />
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.chair}
          categoryName="Chair"
        />
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.table}
          categoryName="Table"
        />
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.sofa}
          categoryName="Armchair"
        />
        <ProductButton
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          image={A.bed}
          categoryName="Bed"
        />
      </S.LogoBox>

      <S.Grid>
        {filteredProducts.map((product) => (
          <S.GridItem key={product.id}>
            <S.GridImg
              src={product.imageURL}
              alt={product.name}
              role="button"
              onClick={() => handleProductItem(product.id)}
            />
            <S.GridLabel onClick={() => handleProductItem(product.id)}>
              {product.name}
            </S.GridLabel>
            <S.GridText>$ {product.price}</S.GridText>
            <S.GridLogo src={A.frame} alt="frame" />
          </S.GridItem>
        ))}
      </S.Grid>

      <Navigation />
    </S.Container>
  );
};

export default Home;
