import fs from "fs/promises";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

type Params = ParsedUrlQuery & {
  productId: string;
};

type Product = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  product: Product;
};

function ProductDetailPage({ product }: Props) {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

const getData = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "shared",
    "data",
    "dummyBackend.json"
  );

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as unknown as string);
  return data;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const products = data.products as Product[];

  const ids = products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { productId: id } }));

  return {
    fallback: true,
    paths: pathsWithParams,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { params } = context;

  const { productId } = params as Params;

  const data = await getData();
  const products = data.products as Product[];

  const product = products.find(({ id }) => id === productId)!;

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductDetailPage;
