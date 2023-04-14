export const fetchLineItems = async (sessionId: string) => {
  const res = await fetch(
 `http://localhost:3000/api/getSession?session_id=${sessionId}`
);

  if (!res.ok) return;

  const data = await res.json();
  const products = data.session.data;

  return products;
};
