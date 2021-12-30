import { AuthForm } from "@components";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

function AuthPage() {
  return <AuthForm />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });

  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default AuthPage;
