import { NavLink } from "react-router-dom";
import { Header, Navigation } from "./Header.styled";

export const HeaderApp = () => {
  return (
    <Header>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/homeWorks">Home Works</NavLink>
      </Navigation>
    </Header>
  );
};