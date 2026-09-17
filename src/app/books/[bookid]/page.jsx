import React from 'react';

const BookDetailPage = async({params}) => {
    const{bookid}=await params;
    const res=await fetch(`http://localhost:5000/books/${bookid}`)
    const book= await res.json();
    return (
        <div>
            <h1>book details</h1>
            
             <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl rounded-xl bg-white p-8 shadow-lg">

        {/* Book Image */}
        <img
          src={book.image}
          alt={book.title}
          className="mb-6 h-80 w-full rounded-lg object-cover"
        />

        {/* Book Details */}
        <p className="mb-2 text-sm font-medium text-blue-600">
          {book.category}
        </p>

        <h1 className="mb-3 text-3xl font-bold text-gray-800">
          {book.title}
        </h1>

        <p className="mb-3 text-lg text-gray-600">
          <strong>Author:</strong> {book.author}
        </p>

        <p className="mb-4 text-2xl font-bold text-gray-900">
          ৳{book.price}
        </p>

        <p className="leading-7 text-gray-600">
          {book.description}
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
          Add to Cart
        </button>

      </div>
    </div>
        </div>
    );
};

export default BookDetailPage;