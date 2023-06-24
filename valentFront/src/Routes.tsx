import { Routes as ValentRoutes , Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";

export const Routes = () => {
  return (
    <ValentRoutes>
      <Route path="/" Component={Home} />
      <Route path="/menu" Component={Menu} />
    </ValentRoutes>
  );
}