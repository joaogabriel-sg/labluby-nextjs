import { createContext, ReactNode, useMemo, useState } from "react";

import { MeetupType } from "../shared/types";

type FavoriteContextProps = {
  favorites: MeetupType[];
  totalFavorites: number;
  handleAddToFavorites: (newFavoriteMeetup: MeetupType) => void;
  handleRemoveFromFavorites: (meetupId: string) => void;
  isItemFavorite: (meetupId: string) => boolean;
};

export const FavoritesContext = createContext<FavoriteContextProps>(
  {} as FavoriteContextProps
);

type FavoritesProviderProps = {
  children: ReactNode | ReactNode[];
};

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<MeetupType[]>([]);

  const totalFavorites = useMemo(() => {
    return favorites.length;
  }, [favorites]);

  function handleAddToFavorites(newFavoriteMeetup: MeetupType) {
    setFavorites((prevFavorites) => [...prevFavorites, newFavoriteMeetup]);
  }

  function handleRemoveFromFavorites(meetupId: string) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((prevFavorite) => prevFavorite.id !== meetupId)
    );
  }

  function isItemFavorite(meetupId: string) {
    return favorites.some((favorite) => favorite.id === meetupId);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        totalFavorites,
        handleAddToFavorites,
        handleRemoveFromFavorites,
        isItemFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
