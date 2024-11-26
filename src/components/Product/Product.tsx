import React from "react";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

interface ProductProps {
  products: Product[];
}

const Product: React.FC<ProductProps> = ({ products }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-6 max-w-5xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:translate-y-4 hover:border-4 hover:border-gray-800"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="bg-gray-800 text-white text-center py-2">
              <p className="text-lg font-semibold">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
