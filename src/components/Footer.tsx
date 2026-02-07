import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Về Vinabook</h3>
            <ul>
              <li><a href="#about">Giới thiệu</a></li>
              <li><a href="#policy">Chính sách bảo mật</a></li>
              <li><a href="#terms">Điều khoản sử dụng</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Hỗ trợ khách hàng</h3>
            <ul>
              <li><a href="#guide">Hướng dẫn mua hàng</a></li>
              <li><a href="#payment">Phương thức thanh toán</a></li>
              <li><a href="#shipping">Chính sách vận chuyển</a></li>
              <li><a href="#return">Đổi trả hàng</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Danh mục sách</h3>
            <ul>
              <li><a href="#literature">Văn học</a></li>
              <li><a href="#economy">Kinh tế</a></li>
              <li><a href="#psychology">Tâm lý - Kỹ năng</a></li>
              <li><a href="#children">Thiếu nhi</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Liên hệ</h3>
            <p>📍 332 Lũy Bán Bích, Tân Phú, TP.HCM</p>
            <p>📞 028.73008182</p>
            <p>✉️ hotro@vinabook.com</p>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#youtube">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Vinabook. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
