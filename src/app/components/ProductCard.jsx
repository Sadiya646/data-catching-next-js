import React from 'react';

const ProductCard = ({product}) => {
    const{id,name,description,price,image,category}=product;
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
     
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      {/* Product Details */}
      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-blue-600">
          {product.category}
        </p>

        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {product.name}
        </h2>

        <p className="mb-4 line-clamp-3 text-sm text-gray-600">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;