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
        scale: 1.05,
        translateY: -4,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        border: "2px solid #3b82f6",
        zIndex: 10,
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="relative bg-white rounded-lg shadow-md p-4 border-2 border-transparent"
      style={{ zIndex: 0 }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-500">${product.price}</p>
      </div>
      {product.description && (
        <p className="text-gray-600 mb-4">{product.description}</p>
      )}

      <div className="relative z-20">
        <Link
          href={`/product/${product.id}`}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
