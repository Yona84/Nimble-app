import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { productByIdSelector } from "../../recoil/atoms";
import Link from "next/link";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = useRecoilValue(productByIdSelector(id as string));

  if (!product) {
    return <div className="container mx-auto p-4">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link className="text-blue-500" href="/">
        ← Back to Product List
      </Link>
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">Price: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
