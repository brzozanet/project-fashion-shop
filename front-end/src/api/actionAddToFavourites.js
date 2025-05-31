export const actionAddToFavourites = ({ params }) => {
  return fetch(`http://localhost:3000/favourites`, {
    method: "POST",
    body: JSON.stringify({
      productId: Number(params.id),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
