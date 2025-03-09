import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  productsState,
  filterState,
  currentPageState,
  paginatedProductsState,
} from "../recoil/atoms";
import SearchBar from "../components/SearchBar";
import FileUploader from "../components/FileUploader";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import type { Product } from "../types";
import { AxiosError } from "axios";
import { fetchProducts } from "../api";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [products, setProducts] = useRecoilState(productsState);
  const [filter, setFilter] = useRecoilState(filterState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const { paginatedProducts, totalPages } = useRecoilValue(
    paginatedProductsState
  );

  const router = useRouter();

  const { isLoading, error } = useQuery(["products"], fetchProducts, {
    onSuccess: (data) => {
      setProducts(data.products as Product[]);
    },
    onError: (e: AxiosError) => console.error("Error fetching products", e),
  });

  useEffect(() => {
    const query = { ...router.query, filter, page: currentPage.toString() };
    router.replace({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
  }, [filter, currentPage, router]);

  import React from 'react';
  import { useQuery } from '@tanstack/react-query';
  import { useRouter } from 'next/router';
  import { useRecoilState } from 'recoil';
  import { productsState, filterState, currentPageState } from '../recoil/atoms';
  import SearchBar from '../components/SearchBar';
  import FileUploader from '../components/FileUploader';
  import ProductCard from '../components/ProductCard';
  import Pagination from '../components/Pagination';
  import type { Product } from '../types';
  import { motion } from 'framer-motion';
  
  const ITEMS_PER_PAGE = 10;
  
  async function fetchProducts() {
    const res = await fetch('/products.json');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  }
  
  const Home = () => {
    const [products, setProducts] = useRecoilState(productsState);
    const [filter, setFilter] = useRecoilState(filterState);
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const router = useRouter();
  
    // Use React Query to fetch products from a local JSON file.
    const { isLoading, error } = useQuery(['products'], fetchProducts, {
      onSuccess: (data) => {
        // Assume the JSON file has a "products" property that's an array of Product.
        setProducts(data.products as Product[]);
      },
    });
  
    // Sync filter and pagination state with the URL query parameters.
    React.useEffect(() => {
      const query = { ...router.query, filter, page: currentPage.toString() };
      router.replace({ pathname: router.pathname, query }, undefined, { shallow: true });
    }, [filter, currentPage, router]);
  
    if (isLoading)
      return (
        <div className="flex items-center justify-center h-screen text-xl text-gray-700">
          Loading...
        </div>
      );
    if (error)
      return (
        <div className="flex items-center justify-center h-screen text-xl text-red-600">
          Error loading products.
        </div>
      );

  return (
    <motion.div
      className="container mx-auto p-4 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Product Showcase
      </h1>
      <div className="flex flex-col items-center">
        <SearchBar value={filter} onChange={setFilter} />
        <FileUploader onFileSelect={(products) => setProducts(products)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </motion.div>
  );
};

export default Home;
