import { useState } from "react";

export const useCart = () => {
  // Inicjalizacja z localStorage
  const [shoppingCart, setShoppingCart] = useState(() => {
    try {
      const savedShoppingCart = localStorage.getItem("shoppingCart");
      return savedShoppingCart ? JSON.parse(savedShoppingCart) : [];
    } catch (error) {
      console.error("Błąd podczas pobierania koszyka", error);
      return [];
    }
  });

  return [shoppingCart, setShoppingCart];
};
