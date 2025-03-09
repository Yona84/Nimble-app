import React from "react";
import Link from "next/link";
import type { Product } from "../types";
import { motion } from "framer-motion";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="flex flex-col justify-center items-center text-center bg-white rounded-lg shadow-md p-4 transform transition-all duration-300"
    >
      <div className="flex items-center flex-col text-center justify-center mb-3">
        <h2 className="text-cente text-xl font-semibold text-gray-800">
          {product.name}
        </h2>
        <p className="text-gray-500 text-center">${product.price}</p>
      </div>
      {product.description && (
        <p className="text-gray-600 mb-4 text-center">{product.description}</p>
      )}
      <Link
        href={`/product/${product.id}`}
        className="text-center text-blue-600 hover:underline text-sm font-medium"
      >
        View Details
      </Link>
    </motion.div>
  );
}
