import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import useSWR from "swr";

type SaleType = {
  id: string;
  username: string;
  volume: number;
};

type Props = {
  sales: SaleType[];
};

function LastSalesPage({ sales: initialSales }: Props) {
  const [sales, setSales] = useState<SaleType[]>(initialSales);

  const { data, error } = useSWR(
    "https://nextjs-course-9a41c-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const formattedSales: SaleType[] = [];

      for (const key in data) {
        formattedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(formattedSales);
    }
  }, [data]);

  if (error) {
    <p>Failed to load.</p>;
  }

  if (!data && sales.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetch(
    "https://nextjs-course-9a41c-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const formattedSales: SaleType[] = [];

  for (const key in data) {
    formattedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: formattedSales,
    },
    revalidate: 10,
  };
};

export default LastSalesPage;
