import React from "react";
import Link from "next/link";
import type { Product } from "../types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mt-1">Price: {product.price}</p>
      <Link href={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
