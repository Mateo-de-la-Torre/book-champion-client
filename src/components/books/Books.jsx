import React, { useState } from 'react';
import { BookItem } from '../bookItem/BookItem';
import { BooksSearch } from '../bookSearch/BooksSearch';
import { DeleteConfirmationModal } from '../ui/DeleteConfirmationModal';

export const Books = ({ books, setBookList }) => {

    const [selectedBook, setSelectedBook] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);

    const handleBookSelected = (title) => {
        setSelectedBook(title);
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const handleRequestDelete = (bookId) => {
        const book = books.find(book => book.id === bookId);
        setBookToDelete(book);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (bookToDelete) {
            setBookList(prev => prev.filter(book => book.id !== bookToDelete.id));
        }
        setShowDeleteModal(false);
        setBookToDelete(null);
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
        setBookToDelete(null);
    };

    const filteredBooks = books.filter((book) =>
        book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <BooksSearch
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
            />
            <p>Libro seleccionado: {selectedBook || 'Ninguno'}</p>
            <div className='d-flex justify-content-center flex-wrap'>
                {filteredBooks.map((book) => (
                    <BookItem
                        key={book.id}
                        id={book.id}
                        title={book.bookTitle}
                        author={book.bookAuthor}
                        rating={book.bookRating}
                        pageCount={book.pageCount}
                        imageUrl={book.imageUrl}
                        onSelect={handleBookSelected}
                        onDelete={handleRequestDelete}
                    />
                ))}
            </div>

            <DeleteConfirmationModal
                show={showDeleteModal}
                onCancel={handleCancelDelete}
                onConfirm={handleConfirmDelete}
            />
        </>
    )
}