import { GetServerSideProps } from "next";

type Props = {
  username: string;
};

function UserProfilePage({ username }: Props) {
  return <h1>{username}</h1>;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { params, req, res } = context;

  return {
    props: {
      username: "joaogabriel-sg",
    },
  };
};

export default UserProfilePage;
