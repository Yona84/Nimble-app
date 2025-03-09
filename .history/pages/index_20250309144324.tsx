import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { productsState, filterState, currentPageState } from "../recoil/atoms";
import SearchBar from "../components/SearchBar";
import FileUploader from "../components/FileUploader";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import type { Product } from "../types";

const ITEMS_PER_PAGE = 10;

async function fetchProducts() {
  const res = await fetch("/products.json");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const Home = () => {
  const [products, setProducts] = useRecoilState(productsState);
  const [filter, setFilter] = useRecoilState(filterState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const router = useRouter();

  const { isLoading, error } = useQuery(["products"], fetchProducts, {
    onSuccess: (data) => {
      setProducts(data.products as Product[]);
    },
  });

  useEffect(() => {
    const query = { ...router.query, filter, page: currentPage.toString() };
    router.replace({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
  }, [filter, currentPage, router]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <SearchBar value={filter} onChange={setFilter} />
      <FileUploader onFileSelect={(products) => setProducts(products)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
