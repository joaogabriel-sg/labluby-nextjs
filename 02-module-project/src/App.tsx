import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";

import { Layout } from "./components";

import { GlobalStyle } from "./shared/styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
