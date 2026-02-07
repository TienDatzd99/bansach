import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './BookDetailPage.css';

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

const BookDetailPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedTab, setSelectedTab] = React.useState<'description' | 'specs'>('description');

  const book = location.state?.book as Book;
  const allBooks = location.state?.allBooks as Book[] || [];
  const relatedBooks = allBooks.filter((b) => b.id !== book?.id);

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!book) return;
    
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      publisher: book.publisher,
      publishYear: book.publishYear
    }, quantity);
    
    alert(`✅ Đã thêm "${book.title}" vào giỏ hàng!`);
  };

  const handleBuyNow = () => {
    if (!book) return;
    
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      publisher: book.publisher,
      publishYear: book.publishYear
    }, quantity);
    
    navigate('/cart');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  if (!book) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h2>Không tìm thấy sách</h2>
        <button onClick={() => navigate('/')} className="btn-back">Quay lại trang chủ</button>
      </div>
    );
  }

  return (
    <div className="book-detail-page">
      <div className="container mx-auto p-4">
        {/* Breadcrumb */}
        <div className="breadcrumb mb-6">
          <span className="cursor-pointer hover:text-red-600" onClick={() => navigate('/')}>Trang chủ</span>
          {' '}/{' '}
          <span>Văn học</span>
          {' '}/{' '}
          <span className="text-red-600 font-medium">{book.title}</span>
        </div>

        {/* Main Content */}
        <div className="detail-content-grid">
          {/* Left: Image */}
          <div className="detail-image-col">
            <div className="image-wrapper">
              <img src={book.image} alt={book.title} />
              {book.discount && <span className="discount-badge">{book.discount}</span>}
            </div>
          </div>

          {/* Right: Info */}
          <div className="detail-info-col">
            <h1 className="book-title-main">{book.title}</h1>
            
            <div className="meta-info">
              <div className="rating-area">
                {renderStars(book.rating)}
                <span className="rating-text">({book.rating}/5)</span>
              </div>
              <span className="isbn-text">ISBN: {book.isbn || '8935325026980'}</span>
            </div>

            <div className="author-info">
              <p><strong>Tác giả:</strong> {book.author}</p>
              <p><strong>Nhà xuất bản:</strong> {book.publisher || 'Lao Động'}</p>
            </div>

            <div className="price-box">
              <div className="price-row">
                <span className="price-current">{book.price}₫</span>
                {book.oldPrice && (
                  <>
                    <span className="price-old">{book.oldPrice}₫</span>
                    <span className="save-badge">
                      Tiết kiệm: {parseInt(book.oldPrice.replace(/,/g, '')) - parseInt(book.price.replace(/,/g, ''))}₫
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="quantity-area">
              <label>Số lượng:</label>
              <div className="quantity-box">
                <button onClick={() => handleQuantityChange('decrease')}>−</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => handleQuantityChange('increase')}>+</button>
              </div>
            </div>

            <div className="action-btns">
              <button className="btn-cart" onClick={handleAddToCart}>
                <span>🛒</span> THÊM VÀO GIỎ
              </button>
              <button className="btn-buy" onClick={handleBuyNow}>MUA NGAY</button>
            </div>

            <div className="services-list">
              <div className="service-row">
                <span className="check-icon">✓</span>
                <span>Sản phẩm 100% chính hãng</span>
              </div>
              <div className="service-row">
                <span className="check-icon">🎁</span>
                <span>Tư vấn mua sách trong giờ hành chính</span>
              </div>
              <div className="service-row">
                <span className="check-icon">🚚</span>
                <span>Miễn phí vận chuyển cho Đơn hàng từ 250.000đ</span>
              </div>
              <div className="service-row">
                <span className="check-icon">📞</span>
                <span>Hotline: 1900 6401</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-section">
          <div className="tab-header">
            <button 
              className={selectedTab === 'description' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setSelectedTab('description')}
            >
              Mô tả sản phẩm
            </button>
            <button 
              className={selectedTab === 'specs' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setSelectedTab('specs')}
            >
              Thông tin chi tiết
            </button>
          </div>

          <div className="tab-body">
            {selectedTab === 'description' ? (
              <div className="description-text">
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
              <div className="specs-table-wrap">
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
        <div className="related-section">
          <h2 className="related-title">Sản phẩm liên quan</h2>
          <div className="related-grid">
            {relatedBooks.slice(0, 4).map((relatedBook) => (
              <div 
                key={relatedBook.id} 
                className="related-item"
                onClick={() => navigate(`/book/${relatedBook.id}`, { state: { book: relatedBook, allBooks } })}
              >
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

export default BookDetailPage;
