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
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-lg shadow-md p-4 transform transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h2>
      <p className="text-gray-600 mb-4">Price: ${product.price}</p>
      <Link
        href={`/product/${product.id}`}
        className="text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </motion.div>
  );
}
