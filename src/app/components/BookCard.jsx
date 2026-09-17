import React from 'react';
import Link from 'next/link'
const BookCard = ({book}) => {
    return (
          <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <img
        src={book.image}
        alt={book.title}
        className="h-64 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">
        
        <p className="mb-2 text-sm font-medium text-blue-600">
          {book.category}
        </p>

        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {book.title}
        </h2>

        <p className="mb-2 text-sm text-gray-500">
          By {book.author}
        </p>

        <p className="mb-4 line-clamp-3 text-sm text-gray-600">
          {book.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${book.price}
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
            Add to Cart
          </button>

          <Link  href={`/books/${book.id}`}>
          
          <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
            Show details
          </button>
          </Link>
        </div>

      </div>
    </div>
    );
};

export default BookCard;