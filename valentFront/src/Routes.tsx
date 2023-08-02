import { Routes as ValentRoutes , Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

export const Routes = () => {
  const token = localStorage.getItem('token');
  return (
    <ValentRoutes>
      <Route path="/" Component={Home} />
      <Route path="/main" Component={token ? Main : SignIn} />
      <Route path="/user/sign-up" Component={SignUp} />
      <Route path="/user/sign-in" Component={SignIn} />
    </ValentRoutes>
  );
}