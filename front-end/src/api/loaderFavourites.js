export const loaderFavourites = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  return fetch(`${BACKEND_URL}/favourites`);
};

// FIXME: Two fetches: products & favourites (id)
// async await
// const response1 = await...
// const response2 = await...
