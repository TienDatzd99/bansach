import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: string): string => {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleQuantityChange = (id: number, currentQty: number, type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      updateQuantity(id, currentQty + 1);
    } else if (type === 'decrease' && currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    }
  };

  const handleRemoveItem = (id: number, title: string) => {
    if (window.confirm(`Bạn có chắc muốn xóa "${title}" khỏi giỏ hàng?`)) {
      removeFromCart(id);
    }
  };

  const handleClearCart = () => {
    if (window.confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng?')) {
      clearCart();
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-empty-state">
            <div className="empty-icon">🛒</div>
            <h2>Giỏ hàng trống</h2>
            <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <button className="btn-continue-shopping" onClick={() => navigate('/')}>
              ← Tiếp tục mua sắm
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Trang chủ</a>
          <span> / </span>
          <span>Giỏ hàng</span>
        </div>

        <h1 className="page-title">Giỏ hàng của bạn</h1>

        <div className="cart-layout">
          {/* Left: Cart Items */}
          <div className="cart-items-section">
            <div className="cart-header">
              <h2>Sản phẩm ({cart.length})</h2>
              <button className="btn-clear-cart" onClick={handleClearCart}>
                🗑️ Xóa tất cả
              </button>
            </div>

            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="item-info">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-author">Tác giả: {item.author}</p>
                    {item.publisher && (
                      <p className="item-meta">NXB: {item.publisher}</p>
                    )}
                  </div>

                  <div className="item-quantity">
                    <label>Số lượng:</label>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity, 'decrease')}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <input type="number" value={item.quantity} readOnly />
                      <button onClick={() => handleQuantityChange(item.id, item.quantity, 'increase')}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className="item-price">
                    <div className="price-label">Đơn giá:</div>
                    <div className="price-value">{formatPrice(item.price)}₫</div>
                  </div>

                  <div className="item-subtotal">
                    <div className="subtotal-label">Thành tiền:</div>
                    <div className="subtotal-value">
                      {formatPrice((parseInt(item.price.replace(/,/g, '')) * item.quantity).toString())}₫
                    </div>
                  </div>

                  <div className="item-remove">
                    <button 
                      onClick={() => handleRemoveItem(item.id, item.title)}
                      title="Xóa sản phẩm"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="cart-summary-section">
            <div className="summary-card">
              <h3 className="summary-title">Thông tin đơn hàng</h3>

              <div className="summary-row">
                <span>Tạm tính:</span>
                <span>{formatPrice(getTotalPrice().toString())}₫</span>
              </div>

              <div className="summary-row">
                <span>Phí vận chuyển:</span>
                <span className="shipping-free">Miễn phí</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Tổng cộng:</span>
                <span className="total-amount">{formatPrice(getTotalPrice().toString())}₫</span>
              </div>

              <button className="btn-checkout" onClick={handleCheckout}>
                Tiến hành thanh toán
              </button>

              <button className="btn-continue" onClick={() => navigate('/')}>
                ← Tiếp tục mua sắm
              </button>

              <div className="payment-methods">
                <p className="methods-title">Phương thức thanh toán:</p>
                <div className="methods-icons">
                  <span>💳</span>
                  <span>🏦</span>
                  <span>💵</span>
                </div>
              </div>

              <div className="cart-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Miễn phí vận chuyển toàn quốc</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Đổi trả trong 7 ngày</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Thanh toán an toàn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
