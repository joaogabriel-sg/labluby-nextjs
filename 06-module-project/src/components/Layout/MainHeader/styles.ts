import styled from "styled-components";
import Link from "next/link";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 10%;
  height: 5rem;
  background-color: #202020;
`;

export const LogoWrapper = styled.div`
  font-size: 1.5rem;
  font-family: "Fira", sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #94fdfd;

  > a {
    text-decoration: none;
    color: #94fdfd;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Logo = styled(Link)``;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #74dacc;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const NavLinks = styled.div``;

export const NavItem = styled.div``;

export const NavLink = styled(Link)``;
