import React from "react";
import Link from "next/link";
import type { Product } from "../types";
import { motion } from "framer-motion";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="border p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transform transition-all duration-300"
  >
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mt-1">Price: {product.price}</p>
      <Link
        className="text-blue-500 mt-2 inline-block"
        href={`/product/${product.id}`}
      >
        View Details
      </Link>

    </motion.div>
>
  );
};

export default ProductCard;
