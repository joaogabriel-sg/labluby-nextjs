import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <h2>{router.query.clientProjectId}</h2>
    </div>
  );
}

export default SelectedClientProjectPage;
