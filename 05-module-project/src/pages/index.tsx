import fs from "fs/promises";
import path from "path";
import { GetStaticProps } from "next";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  products: Product[];
};

function Home({ products }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "data",
    "dummyBackend.json"
  );

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as unknown as string);
  const products = data.products as Product[];

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};

export default Home;
