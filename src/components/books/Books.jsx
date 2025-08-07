import React from 'react';
import { BookItem } from '../bookItem/BookItem';



export const Books = ({ books }) => {

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {books.map((book) => (
                <BookItem
                    key={book.id}
                    title={book.bookTitle}
                    author={book.bookAuthor}
                    rating={book.bookRating}
                    pageCount={book.pageCount}
                    imageUrl={book.imageUrl}
                />
            ))}

        </div>
    )
}