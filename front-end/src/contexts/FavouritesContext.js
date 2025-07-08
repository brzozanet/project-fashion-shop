// TODO: plik nieużywany, do usunięcia

import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  favourites: [],
  setFavourites: () => {},
});

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  return (
    <FavouritesContext value={{ favourites, setFavourites }}>
      {children}
    </FavouritesContext>
  );
};
