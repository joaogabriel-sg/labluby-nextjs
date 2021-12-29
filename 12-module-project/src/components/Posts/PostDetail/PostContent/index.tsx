import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("css", css);

import { PostHeader } from "@components";

import { PostType } from "@shared/types";

import * as S from "./styles";

type Props = {
  post: PostType;
};

export function PostContent({ post }: Props) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <S.Container>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          img(image) {
            return (
              <Image
                src={`/images/posts/${post.slug}/${image.src}`}
                alt={image.alt}
                width={600}
                height={300}
              />
            );
          },
          code(code) {
            const { className, children } = code;
            const language = className?.split("-")[1] || "";

            return (
              <SyntaxHighlighter style={dracula} language={language}>
                {children}
              </SyntaxHighlighter>
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </S.Container>
  );
}
