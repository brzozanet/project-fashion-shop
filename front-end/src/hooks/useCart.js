export const useCart = () => {
  return null;
  //TODO: add localStorage custom hook
  //
  // Czyli trzeba tez użyć kolejnego custom hooka, np. useCart,
  // który będzie zapisywał / pobierał z localStorage dane koszyka
  // by później w komponencie Layout przekazać je do kontekstu CartContext?
  //
  // INFO: Claude chat
  //
  // Dokładnie! Masz absolutnie rację! 🎯
  // Dlaczego useCart hook to świetny pomysł:
  //
  // 1. Konsystencja z istniejącą architekturą
  // Już masz useCurrency hook, który robi dokładnie to samo:
  // Zarządza stanem
  // Synchronizuje z localStorage
  // Zwraca [value, setValue]
  //
  // 2. Logiczny przepływ danych
  //   useCart hook → useState + localStorage
  //   ↓
  // Layout component → przekazuje do CartContext
  //   ↓
  // Detail component → używa useContext(CartContext)
  //
  // 3. Separacja odpowiedzialności
  // useCart → logika localStorage + stan
  // CartContext → udostępnianie stanu w drzewie komponentów
  // Layout → konfiguracja kontekstów
  // Detail → UI + używanie stanu
  //
  // 4. Korzyści
  // ✅ Trwałość danych - koszyk przetrwa odświeżenie strony
  // ✅ Reużywalność - hook można użyć w innych komponentach
  // ✅ Testowanie - łatwiejsze testowanie logiki osobno
  // ✅ Spójność - ten sam wzorzec co useCurrency
  // ✅ Centralizacja - cała logika koszyka w jednym miejscu
  //
  // Struktura którą sugerujesz:
  //   hooks/useCart.js → zarządza stanem + localStorage
  //   ↓
  // components/Layout/Layout.jsx → używa useCart + przekazuje do CartContext
  //   ↓
  // components/Detail/Detail.jsx → używa useContext(CartContext)
  //
  // Dodatkowe możliwości useCart:
  // addToCart(product)
  // removeFromCart(productId)
  // clearCart()
  // getCartTotal()
  // isInCart(productId)
  //
  // To jest idealny wzorzec! Dokładnie tak jak z useCurrency! 👍
};
