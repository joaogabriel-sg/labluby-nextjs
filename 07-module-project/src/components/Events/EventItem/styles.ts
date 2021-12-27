import styled from "styled-components";
import Image from "next/image";

export const Container = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Thumbnail = styled(Image).attrs({
  width: 250,
  height: 160,
})`
  width: 100%;
  object-fit: cover;
  height: 10rem;

  @media (min-width: 768px) {
    width: 40%;
    height: 14rem;
  }
`;

export const Content = styled.main`
  width: 100%;
  padding: 0 1rem;
  text-align: center;

  @media (min-width: 768px) {
    width: 60%;
    padding: 0;
    text-align: left;
  }
`;

export const Header = styled.header``;

export const Title = styled.h2`
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    margin: 1rem 0;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #666666;
  }
`;

export const Date = styled.time`
  color: #666666;
  font-weight: bold;
`;

export const AddressWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #666666;
  }
`;

export const Address = styled.address`
  margin: 0.5rem 0;
  color: #666666;
  white-space: pre;
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const ButtonTitle = styled.span``;

export const IconWrapper = styled.span`
  margin-left: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
