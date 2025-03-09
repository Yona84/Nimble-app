import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { productsState } from "../../recoil/atoms";
import Link from "next/link";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const products = useRecoilValue(productsState);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="container mx-auto p-4">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <a className="text-blue-500">← Back to Product List</a>
      </Link>
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">Price: {product.price}</p>
      {/* Add additional product details as needed */}
    </div>
  );
};

export default ProductDetail;
