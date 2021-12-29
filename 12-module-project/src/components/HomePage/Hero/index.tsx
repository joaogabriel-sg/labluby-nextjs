import * as S from "./styles";

export function Hero() {
  return (
    <S.Container>
      <S.ThumbnailWrapper>
        <S.Thumbnail
          src="/images/site/jg.jpeg"
          alt="An image showing João Gabriel"
          width={300}
          height={300}
        />
      </S.ThumbnailWrapper>

      <S.Title>Hi, I&apos;m João Gabriel!</S.Title>
      <S.Subtitle>
        I blog about web and mobile development - especially React and React
        Native.
      </S.Subtitle>
    </S.Container>
  );
}
