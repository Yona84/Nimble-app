import React, { useRef } from "react";
import type { Product } from "../types";
import { useSetRecoilState } from "recoil";
import { productsState } from "../recoil/atoms";

type FileUploaderProps = {
  onFileSelect?: (products: Product[]) => void;
};

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const setProducts = useSetRecoilState(productsState);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    try {
      const data = JSON.parse(text);
      if (data.products && Array.isArray(data.products)) {
        setProducts(data.products);
        if (onFileSelect) {
          onFileSelect(data.products);
        }
      } else {
        console.error(
          'Invalid file format. Expected JSON with a "products" array.'
        );
      }
    } catch (err) {
      console.error("Error parsing JSON file");
    }
  };

  return (
    <div className="my-4">
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;
