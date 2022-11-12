import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
background-color: #757575;
border-bottom: 1px solid #ececec;
`;

export const Navigation = styled.nav`
display: flex;
align-items: center;
`;

export const Link = styled(NavLink)`
  display: flex;
  padding-top: 32px;
  padding-bottom: 32px;
  margin-left: 50px;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #212121;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;
  letter-spacing: 0.02em;

  
`;

