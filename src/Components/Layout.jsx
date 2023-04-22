import { Outlet } from "react-router-dom";
import DrawerMain from "./navbar/DrawerMain";
import DrawerSide from "./navbar/DrawerSide";

const Layout = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <DrawerMain />
        <Outlet />
      </div>
      <DrawerSide />
    </div>
  );
};

export default Layout;
