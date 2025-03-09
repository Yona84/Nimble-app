export const fetchProducts = async () => {
  const res = await fetch("/products.json");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
