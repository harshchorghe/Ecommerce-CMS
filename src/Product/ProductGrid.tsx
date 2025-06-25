// components/ProductGrid.tsx
import React from "react";

type Product = {
  title: string;
  price: string;
  imageUrl: string;
  description?: string;
};

type Props = {
  products: Product[];
};

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-200"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600 mb-1">{product.description}</p>
          
          <p className="font-bold text-green-600">₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
