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
  name: string;
  description: string;
  price: string;
  imageURL: string;
  category: string;
}
