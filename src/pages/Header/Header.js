import { NavLink } from "react-router-dom";
import { Header } from "./Header.styled";

export const HeaderApp = () => {
  return (
    <Header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/homeWorks">Home Works</NavLink>
      </nav>
    </Header>
  );
};