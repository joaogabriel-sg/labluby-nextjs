import { useContext } from "react";

import { FavoritesContext } from "../../store/FavoritesContext";

export function useFavorites() {
  const context = useContext(FavoritesContext);
  return context;
}
