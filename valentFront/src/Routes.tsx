import { Routes as ValentRoutes , Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import { SignUp } from "./pages/SignUp";

export const Routes = () => {
  return (
    <ValentRoutes>
      <Route path="/" Component={Home} />
      <Route path="/main" Component={Main} />
      <Route path="/sign-up" Component={SignUp} />
    </ValentRoutes>
  );
}