import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";

import { Layout } from "./components";

import { GlobalStyle } from "./shared/styles";
import { FavoritesProvider } from "./store/FavoritesContext";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <GlobalStyle />
        <Layout>
          <AppRoutes />
        </Layout>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
