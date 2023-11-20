export interface IAuthProps {
  name: string;
  email: string;
  password: string;
  password2?: string;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface IProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  imageURL: string;
  category: string;
  productId: number;
}

export interface IProductState {
  name: string;
  description: string;
  price: string;
  imageURL: string;
  category: string;
}

export interface IProductsProps {
  products: IProductProps[];
}

export interface IPrductButtonProps {
  handleCategorySelect: (category: string) => void;
  selectedCategory: string;
  image: string;
  categoryName: string;
}

export interface IHeaderClassProps {
  activeClass: string;
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface ICartItem {
  [x: string]: any;
  id: number;
  name?: string;
  price: string;
  imageURL?: string;
  quantity: number;
}

export interface IProductItem {
  id: number;
  name: string;
  price: string;
  imageURL: string;
}

export interface ICartState {
  cartItems: ICartItem[];
  totalPrice: number;
  shipping: number;
  totalQty: number;
}

export interface IGridLogoProps {
  $active: boolean;
}

export interface ITopHeaderProps {
  path?: string;
  title?: string;
}
