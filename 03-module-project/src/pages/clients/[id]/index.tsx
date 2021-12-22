import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function handleLoadProject() {
    router.push("/clients/isabele/projectA");
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <h2>{router.query.id}</h2>
      <button onClick={handleLoadProject}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
