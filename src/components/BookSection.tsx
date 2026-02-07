import React from 'react';
import BookCard from './BookCard';
import './BookSection.css';

interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
  oldPrice?: string;
  image: string;
  discount?: string;
  rating: number;
}

interface BookSectionProps {
  title: string;
  books: Book[];
  onBookClick?: (book: Book) => void;
}

const BookSection: React.FC<BookSectionProps> = ({ title, books, onBookClick }) => {
  return (
    <section className="book-section ">
      <div className="container mx-auto">
        <h2 className="section-title">{title}</h2>
        <div className="book-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              oldPrice={book.oldPrice}
              image={book.image}
              discount={book.discount}
              rating={book.rating}
              onClick={() => onBookClick?.(book)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
