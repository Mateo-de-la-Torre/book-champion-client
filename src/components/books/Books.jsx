import React, { useState } from 'react';
import { BookItem } from '../bookItem/BookItem';



export const Books = ({ books }) => {

    const [selectedBook, setSelectedBook] = useState('');

    const handleBookSelected = (title) => {
        setSelectedBook(title);
    };

    return (
        <>
            <p>Libro seleccionado: {selectedBook || 'Ninguno'}</p>
            <div className='d-flex justify-content-center flex-wrap'>
                {books.map((book) => (
                    <BookItem
                        key={book.id}
                        title={book.bookTitle}
                        author={book.bookAuthor}
                        rating={book.bookRating}
                        pageCount={book.pageCount}
                        imageUrl={book.imageUrl}
                        onSelect={handleBookSelected}
                    />
                ))}

            </div>
        </>
    )
}