import { LayoutProps } from "../@types";

const Layout = ({ children }: LayoutProps) => {
  return <div className="container">{children}</div>;
};

export default Layout;
