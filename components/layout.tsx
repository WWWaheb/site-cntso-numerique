import { FC } from "react";
import Navbar from "./navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="relative bg-black">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
