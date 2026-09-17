import React from 'react';
import BookCard from '../components/BookCard';


const getBooks=async()=>{
    const res=await fetch('http://localhost:5000/books',{next:{revalidate:10}}) //ekta time por change hoye jabe jeita change korsi

    if(!res.ok){
        throw new Error("failed to fetch books")
    }
    return res.json()
}

const BooksPage = async() => {
    const books= await getBooks()
    return (
        <div>
            <h2>Books:{books.length}</h2>


            <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book=> <BookCard
                    key={book.id}
                    book={book}
        
                    ></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;