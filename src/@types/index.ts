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
