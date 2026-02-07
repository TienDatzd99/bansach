import React, { useState } from 'react';
import './BookDetail.css';

interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
  oldPrice?: string;
  image: string;
  discount?: string;
  rating: number;
  isbn?: string;
  publisher?: string;
  publishYear?: string;
  pages?: number;
  size?: string;
  weight?: number;
  coverType?: string;
  description?: string;
}

interface BookDetailProps {
  book: Book;
  relatedBooks: Book[];
  onClose: () => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, relatedBooks, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState<'description' | 'specs'>('description');

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <div className="book-detail-overlay" onClick={onClose}>
      <div className="book-detail-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="book-detail-content">
          {/* Left: Image Gallery */}
          <div className="detail-image-section">
            <div className="main-image">
              <img src={book.image} alt={book.title} />
              {book.discount && <span className="discount-badge">{book.discount}</span>}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="detail-info-section">
            <div className="breadcrumb">
              <span>Trang chủ</span> / <span>Văn học</span> / <span>{book.title}</span>
            </div>

            <h1 className="detail-title">{book.title}</h1>
            
            <div className="detail-meta">
              <div className="rating-section">
                {renderStars(book.rating)}
                <span className="rating-count">({book.rating}/5)</span>
              </div>
              <span className="isbn">ISBN: {book.isbn || '8935325026980'}</span>
            </div>

            <div className="author-publisher">
              <p><strong>Tác giả:</strong> {book.author}</p>
              <p><strong>Nhà xuất bản:</strong> {book.publisher || 'Lao Động'}</p>
            </div>

            <div className="price-section">
              <div className="prices">
                <span className="current-price">{book.price}₫</span>
                {book.oldPrice && (
                  <>
                    <span className="old-price">{book.oldPrice}₫</span>
                    <span className="save-amount">
                      Tiết kiệm: {parseInt(book.oldPrice.replace(/,/g, '')) - parseInt(book.price.replace(/,/g, ''))}₫
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="quantity-section">
              <label>Số lượng:</label>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange('decrease')}>−</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => handleQuantityChange('increase')}>+</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-add-cart">
                <span className="cart-icon">🛒</span>
                THÊM VÀO GIỎ
              </button>
              <button className="btn-buy-now">MUA NGAY</button>
            </div>

            <div className="product-services">
              <div className="service-item">
                <span className="icon">✓</span>
                <span>Sản phẩm 100% chính hãng</span>
              </div>
              <div className="service-item">
                <span className="icon">🎁</span>
                <span>Tư vấn mua sách trong giờ hành chính</span>
              </div>
              <div className="service-item">
                <span className="icon">🚚</span>
                <span>Miễn phí vận chuyển cho Đơn hàng từ 250.000đ</span>
              </div>
              <div className="service-item">
                <span className="icon">📞</span>
                <span>Hotline: 1900 6401</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tab-buttons">
            <button 
              className={selectedTab === 'description' ? 'active' : ''}
              onClick={() => setSelectedTab('description')}
            >
              Mô tả sản phẩm
            </button>
            <button 
              className={selectedTab === 'specs' ? 'active' : ''}
              onClick={() => setSelectedTab('specs')}
            >
              Thông tin chi tiết
            </button>
          </div>

          <div className="tab-content">
            {selectedTab === 'description' ? (
              <div className="description-content">
                <h3>Edogawa Ranpo Tuyển Tập - Những Câu Chuyện Bí Ẩn Và Ly Kỳ Nhất</h3>
                <p>
                  {book.description || `Chuyện tình kỳ lạ giữa một "chiếc ghế" với những người phụ nữ ngồi lên nó - kẻ
                  đã từ bỏ phần người và tận hưởng khoái cảm trần trụi vừa lén lút, vừa công khai.
                  Một căn phòng đỏ dẫn vào thế giới nội tâm đầy điên cuồng của những tên giết
                  người, nhưng căn nguyên tội ác thì lại hoàn toàn trái ngược.`}
                </p>
                <p>
                  Sự tàn bạo và cái đẹp, trinh thám và tâm linh đan xen một cách nhịp nhàng và chặt chẽ, 
                  Edogawa Ranpo đã vẽ lên những mảnh đời rất chân thực nhưng lại nhuốm màu ma quái và đầy mộng mị.
                </p>
                <p>
                  Một khi bước vào thế giới trong sách, người đọc sẽ không thể nào thoát ra ngay
                  được, kể cả khi đã gấp lại trang giấy cuối cùng.
                </p>
              </div>
            ) : (
              <div className="specs-content">
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <td><strong>Mã sản phẩm</strong></td>
                      <td>{book.isbn || '8935325026980'}</td>
                    </tr>
                    <tr>
                      <td><strong>Tác giả</strong></td>
                      <td>{book.author}</td>
                    </tr>
                    <tr>
                      <td><strong>Nhà xuất bản</strong></td>
                      <td>{book.publisher || 'Lao Động'}</td>
                    </tr>
                    <tr>
                      <td><strong>Năm xuất bản</strong></td>
                      <td>{book.publishYear || '2025'}</td>
                    </tr>
                    <tr>
                      <td><strong>Ngôn ngữ</strong></td>
                      <td>Tiếng Việt</td>
                    </tr>
                    <tr>
                      <td><strong>Số trang</strong></td>
                      <td>{book.pages || '240'}</td>
                    </tr>
                    <tr>
                      <td><strong>Kích thước</strong></td>
                      <td>{book.size || '20.5 x 14.5 x 1.1 cm'}</td>
                    </tr>
                    <tr>
                      <td><strong>Trọng lượng (gr)</strong></td>
                      <td>{book.weight || '224'}</td>
                    </tr>
                    <tr>
                      <td><strong>Hình thức</strong></td>
                      <td>{book.coverType || 'Bìa Mềm'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products">
          <h2>Sản phẩm liên quan</h2>
          <div className="related-grid">
            {relatedBooks.slice(0, 4).map((relatedBook) => (
              <div key={relatedBook.id} className="related-card">
                <img src={relatedBook.image} alt={relatedBook.title} />
                <h4>{relatedBook.title}</h4>
                <div className="related-rating">{renderStars(relatedBook.rating)}</div>
                <p className="related-price">{relatedBook.price}₫</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
