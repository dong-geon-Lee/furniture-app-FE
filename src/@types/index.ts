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
  id?: number;
  name: string;
  description: string;
  price: string;
  imageURL: string;
  category: string;
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
  id: number;
  name: string;
  price: string;
  imageURL: string;
}

export interface ICartState {
  cartItems: ICartItem[];
}

export interface IGridLogoProps {
  $active: boolean;
}
