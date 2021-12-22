import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Portfolio Project {router.query.projectId} Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
