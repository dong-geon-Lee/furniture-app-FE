import { ILayoutProps } from "../@types";

const Layout = ({ children }: ILayoutProps) => {
  return <div className="container">{children}</div>;
};

export default Layout;
