import React from 'react';
import './BookCard.css';

interface BookCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  discount?: string;
  oldPrice?: string;
  rating?: number;
  author?: string;
  onClick?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ 
  title, 
  price, 
  image, 
  discount, 
  oldPrice,
  rating = 4.5,
  author,
  onClick 
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">★</span>);
    }
    return stars;
  };

  return (
    <div className="book-card" onClick={onClick}>
      <div className="book-image">
        {discount && <span className="discount-badge">{discount}</span>}
        <img src={image} alt={title} />
        <div className="book-overlay">
          <button className="btn-quick-view" onClick={(e) => { e.stopPropagation(); onClick?.(); }}>
            👁️ Xem nhanh
          </button>
        </div>
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        {author && <p className="book-author">Tác giả: {author}</p>}
        <div className="book-rating">
          {renderStars(rating)}
          <span className="rating-number">({rating})</span>
        </div>
        <div className="book-price-wrapper">
          {oldPrice && <span className="old-price">{oldPrice}₫</span>}
          <div className="book-price">{price}₫</div>
        </div>
        <button className="btn-add-cart" onClick={(e) => e.stopPropagation()}>
          <span>🛒</span> Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default BookCard;
