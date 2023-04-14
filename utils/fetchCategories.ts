export const fetchCategories = async () => {
  const res = await fetch("https://take-control-delta.vercel.app/api/getCategories"
  );

  const data = await res.json();
  const categories: Category[] = data.categories;

  return categories;
};
