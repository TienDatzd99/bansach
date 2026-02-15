import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeFromCart } from '../store/slices/cartSlice';
import { selectCartItems, selectCartTotalItems, selectCartTotalPrice } from '../store/slices/selectors';
import './CartDropdown.css';

const CartDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Sử dụng Redux
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectCartTotalItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN');
  };

  const handleViewCart = () => {
    setIsOpen(false);
    navigate('/cart');
  };

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-dropdown-wrapper" ref={dropdownRef}>
      <div 
        className="cart-toggle rounded-b-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cart-icon-box">
         <i className="fas fa-shopping-cart" style={{ fontSize: '24px', color: 'white' }}></i>
          {totalItems > 0 && (
            <span className="cart-count">
              <span className="count-number">{totalItems}</span>
            </span>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="cart-dropdown-menu">
          <span className="dropdown-triangle">
            <svg viewBox="0 0 20 9">
              <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
            </svg>
          </span>
          
          <div className="cart-dropdown-content">
            {cart.length === 0 ? (
              <div className="cart-empty">
                <p>Giỏ hàng trống</p>
              </div>
            ) : (
              <>
                <div className="cart-items-scroll">
                  <table className="cart-items-table">
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id} className="cart-item-row">
                          <td className="item-image">
                            <a href={`/book/${item.id}`} onClick={() => setIsOpen(false)}>
                              <img src={item.image} alt={item.title} />
                            </a>
                          </td>
                          <td className="item-details">
                            <p className="item-title">
                              <a 
                                href={`/book/${item.id}`}
                                onClick={() => setIsOpen(false)}
                                title={item.title}
                              >
                                {item.title}
                              </a>
                              <span className="item-variant">
                                {item.publisher} / {item.publishYear} / {item.author}
                              </span>
                            </p>
                            <div className="item-quantity-price">
                              <div className="item-quantity">
                                <span className="qty-label">Số lượng: </span>
                                <span className="qty-value">{item.quantity}</span>
                              </div>
                              <div className="item-price">
                                {formatPrice(parseInt(item.price.replace(/,/g, '')) * item.quantity)}₫
                              </div>
                            </div>
                            <div className="item-remove">
                              <button onClick={() => handleRemoveFromCart(item.id)}>
                                <i className="remove-icon">✕</i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="cart-divider"></div>

                <div className="cart-total-section">
                  <table className="cart-total-table">
                    <tbody>
                      <tr>
                        <td className="total-label">TỔNG TIỀN:</td>
                        <td className="total-amount">{formatPrice(totalPrice)}₫</td>
                      </tr>
                      <tr>
                        <td>
                          <button 
                            className="btn-view-cart"
                            onClick={handleViewCart}
                          >
                            Xem giỏ hàng
                          </button>
                        </td>
                        <td>
                          <button 
                            className="btn-checkout"
                            onClick={handleCheckout}
                          >
                            Thanh toán
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
