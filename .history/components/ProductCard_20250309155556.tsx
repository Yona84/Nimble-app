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
      // Subtle hover effect: small lift and a bit more shadow
      whileHover={{
        scale: 1.02,
        translateY: -2,
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white rounded-lg shadow-md p-4 transform transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-500">${product.price}</p>
      </div>
      {product.description && (
        <p className="text-gray-600 mb-4">{product.description}</p>
      )}
      <Link
        href={`/product/${product.id}`}
        className="text-blue-600 hover:underline text-sm font-medium"
      >
        View Details
      </Link>
    </motion.div>
  );
}
