
import { Header, Link, Navigation } from "./Header.styled";

export const HeaderApp = () => {
  return (
    <Header>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/homeWorks">Home Works</Link>
      </Navigation>
    </Header>
  );
};