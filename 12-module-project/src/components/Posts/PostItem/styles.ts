import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Container = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: var(--color-grey-800);
  text-align: center;
`;

export const PostLink = styled(Link)``;

export const PostWrapper = styled.a`
  color: var(--color-grey-100);
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow: hidden;
`;

export const Thumbnail = styled(Image)`
  object-fit: cover;
`;

export const Content = styled.div`
  padding: var(--size-4);
`;

export const Title = styled.h3`
  margin: var(--size-2) 0;
  font-size: var(--size-6);
`;

export const Date = styled.time`
  font-style: italic;
  color: var(--color-grey-300);
`;

export const Excerpt = styled.p`
  line-height: var(--size-6);
`;
