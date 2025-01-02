import React from "react";
import { Link } from "react-router-dom";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-0 pb-6 max-w-5xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform group"
          >
            <Link
              to={`/product/${product.id}`}
              className="relative z-10" // Link için z-index ekledik
            >
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-all duration-500 transform group-hover:rotate-y-180 group-hover:scale-110 group-hover:blur-sm"
                />
                <div
                  className="absolute bottom-0 w-full bg-gray-400 text-gray-800 text-center py-2 transition-all duration-300 transform opacity-100 group-hover:translate-y-[-100%] group-hover:opacity-100"
                >
                  <p className="text-lg font-semibold">{product.name}</p>
                </div>
              </div>
            </Link>
            {/* Çerçeve ekleme */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-800 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
