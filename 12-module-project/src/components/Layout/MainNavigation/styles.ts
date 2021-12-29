import styled from "styled-components";
import Link from "next/link";

export const Container = styled.header`
  width: 100%;
  height: 6rem;
  background-color: var(--color-grey-900);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

export const LogoLink = styled(Link)``;

export const LogoWrapper = styled.a``;

export const NavBar = styled.nav``;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

export const NavItem = styled.li`
  margin: 0 var(--size-4);

  > a {
    color: var(--color-grey-100);
    font-size: var(--size-4);

    &:hover,
    &:active,
    &.active {
      color: var(--color-grey-200);
    }

    @media (min-width: 768px) {
      font-size: var(--size-5);
    }
  }
`;

export const NavLink = styled(Link)``;
