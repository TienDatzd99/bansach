import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: '🎉 Khuyến mãi đặc biệt',
      subtitle: 'Giảm giá đến 50% cho sách mới',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      buttonText: 'Mua ngay'
    },
    {
      title: '📚 Sách bán chạy 2025',
      subtitle: 'Top 100 đầu sách được yêu thích nhất',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      buttonText: 'Khám phá'
    },
    {
      title: '🚚 Miễn phí vận chuyển',
      subtitle: 'Cho đơn hàng từ 200.000đ',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      buttonText: 'Mua sắm ngay'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="banner">
      <div 
        className="banner-slide" 
        style={{ background: slides[currentSlide].gradient }}
      >
        <div className="banner-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].subtitle}</p>
          <button className="btn-banner">{slides[currentSlide].buttonText}</button>
        </div>
      </div>
      <div className="banner-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
