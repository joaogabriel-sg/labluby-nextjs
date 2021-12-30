import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

import { UserProfile } from "@components";

function ProfilePage() {
  return <UserProfile />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default ProfilePage;
