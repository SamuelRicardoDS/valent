import { Routes as ValentRoutes , Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Main } from "./pages/Main";

export const Routes = () => {
  return (
    <ValentRoutes>
      <Route path="/" Component={Home} />
      <Route path="/main" Component={Main} />
    </ValentRoutes>
  );
}