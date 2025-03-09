import { selector, atom, selectorFamily } from "recoil";
import type { Product } from "../types/index";

const ITEMS_PER_PAGE = 3;

export const productByIdSelector = selectorFamily<Product | undefined, string>({
  key: "productByIdSelectorKey",
  get:
    (id: string) =>
    ({ get }) => {
      const products = get(productsState);
      return products.find((p: Product) => p.id === id);
    },
});

export const filteredProductsState = selector({
  key: "filteredProductsStateKey",
  get: ({ get }) => {
    const products = get(productsState);
    const filter = get(filterState);
    return products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  },
});

export const paginatedProductsState = selector({
  key: "paginatedProductsStateKey",
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
  key: "productsStateKey",
  default: [],
});

export const filterState = atom<string>({
  key: "filterStateKey",
  default: "",
});

export const currentPageState = atom<number>({
  key: "currentPageStateKey",
  default: 1,
});
