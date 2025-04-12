export const loaderFavourites = async () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [favourites, products] = await Promise.all([
    (await fetch(`${BACKEND_URL}/favourites`)).json(),
    (await fetch(`${BACKEND_URL}/products`)).json(),
  ]);

  console.log(favourites);
  console.log(products);

  const userFavourites = products.filter((product) =>
    favourites.some((favourite) => favourite.productId === product.id)
  );
  console.log(userFavourites);
};
