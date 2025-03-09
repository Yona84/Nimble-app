import { selector, atom } from "recoil";
import type { Product } from "../types/index";

const ITEMS_PER_PAGE = 10;

export const filteredProductsState = selector({
  key: "filteredProductsState",
  get: ({ get }) => {
    const products = get(productsState);
    const filter = get(filterState);
    return products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  },
});

export const paginatedProductsState = selector({
  key: "paginatedProductsState",
  get: ({ get }) => {
    const filteredProducts = get(filteredProductsState);
    const currentPage = get(currentPageState);
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(
      startIdx,
      startIdx + ITEMS_PER_PAGE
    );
    return { paginatedProducts, totalPages };
  },
});

export const productsState = atom<Product[]>({
  key: "productsState",
  default: [],
});

export const filterState = atom<string>({
  key: "filterState",
  default: "",
});

export const currentPageState = atom<number>({
  key: "currentPageState",
  default: 1,
});
