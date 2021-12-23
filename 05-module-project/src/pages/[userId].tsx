import { GetServerSideProps } from "next";

type Params = {
  userId: string;
};

type Props = {
  id: string;
};

function UserIdPage({ id }: Props) {
  return <h1>{id}</h1>;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { params } = context;

  const { userId } = params as Params;

  return {
    props: {
      id: `userId-${userId}`,
    },
  };
};

export default UserIdPage;
