import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white text-center my-8">
      <h2 className="text-3xl font-bold mb-4">🎨 Tailwind CSS đã hoạt động!</h2>
      <p className="text-lg mb-4">Bạn có thể sử dụng tất cả utility classes của Tailwind</p>
      <div className="flex gap-4 justify-center flex-wrap">
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105">
          Button 1
        </button>
        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-all hover:scale-105">
          Button 2
        </button>
        <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105">
          Gradient Button
        </button>
      </div>
    </div>
  );
};

export default TailwindTest;
