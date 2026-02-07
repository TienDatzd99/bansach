import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tìm kiếm:', searchQuery);
  };

  return (
    <header className="header">
      {/* Top Bar - Green background with info and cart */}
      <div className="header-top-bar" style={{ backgroundColor: '#417505' }}>
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span className="contact-item">📞 028.73008182</span>
              <span className="contact-item">📧 hotro@vinabook.com</span>
              <span className="contact-item">� 332 Lũy Bán Bích, Phường Tân Phú, TP. Hồ Chí Minh</span>
            </div>
            <div className="top-bar-actions">
              <button className="btn-account-top">
                <span className="icon">👤</span>
                <span>TÀI KHOẢN</span>
              </button>
              <button className="btn-login">
                ĐĂNG XUẤT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Logo and Search */}
      <div className="header-main">
        <div className="container">
          <div className="main-header-content">
            <div className="header-logo">
              <h1>📚 VINABOOK</h1>
              <p className="tagline">Nhà sách trực tuyến</p>
            </div>
            <form className="header-search" onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">Tìm kiếm</button>
            </form>
            <div className="header-contact-box">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <div className="contact-label">Tư vấn bán hàng</div>
                <div className="contact-number">028.73008182</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
