export const fetchProducts = async () => {
  const res = await fetch("https://take-control-delta.vercel.app/api/getProducts"
  );

  const data = await res.json();
  const products: Product[] = data.products;

  return products;
};
