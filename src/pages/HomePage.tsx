import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner, BookSection } from '../components';

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

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Dữ liệu mẫu cho sách Văn học
  const booksVanHoc: Book[] = [
    {
      id: 1,
      title: 'Ngõ Ngô Đồng',
      author: 'Lê Thị Hồng Hạnh',
      price: '259,000',
      oldPrice: '305,000',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      discount: '-15%',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Những Thế Giới Con',
      author: 'Nguyễn Nhật Ánh',
      price: '175,000',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
      rating: 4.5
    },
    {
      id: 3,
      title: 'Kim Vân Kiều',
      author: 'Nguyễn Du',
      price: '238,000',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
      rating: 5.0
    },
    {
      id: 4,
      title: 'Tiếng Núi - Bìa Cứng',
      author: 'Khaled Hosseini',
      price: '250,000',
      oldPrice: '312,000',
      image: 'https://images.unsplash.com/photo-1551029506-0807df4e5e6d?w=300&h=400&fit=crop',
      discount: '-20%',
      rating: 4.7
    },
    {
      id: 5,
      title: 'Hai Vạn Dặm Dưới Biển',
      author: 'Jules Verne',
      price: '215,000',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop',
      rating: 4.6
    },
    {
      id: 6,
      title: 'Đỉnh Gió Hú',
      author: 'Emily Brontë',
      price: '117,000',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      rating: 4.4
    }
  ];

  // Dữ liệu mẫu cho sách Tâm lý - Kỹ năng
  const booksTamLy: Book[] = [
    {
      id: 7,
      title: 'Bậc Thầy Quản Lý Thời Gian',
      author: 'Brian Tracy',
      price: '139,000',
      oldPrice: '155,000',
      image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=300&h=400&fit=crop',
      discount: '-10%',
      rating: 4.9
    },
    {
      id: 8,
      title: 'Sức Mạnh Của Kỷ Luật Bản Thân',
      author: 'Rory Vaden',
      price: '126,000',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop',
      rating: 4.7
    },
    {
      id: 9,
      title: 'Sự Dung Dị Của Ngôn Từ',
      author: 'Hoàng Anh Sướng',
      price: '109,000',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop',
      rating: 4.5
    },
    {
      id: 10,
      title: 'Càng Dịu Dàng, Càng Đắt Giá',
      author: 'Tô Chí Hạnh',
      price: '89,000',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop',
      rating: 4.6
    },
    {
      id: 11,
      title: 'Thành Công Không Cần Gồng',
      author: 'Jamie Cat Callan',
      price: '155,000',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
      rating: 4.3
    },
    {
      id: 12,
      title: 'Cờ Đỏ Cờ Xanh',
      author: 'Freya India',
      price: '230,000',
      oldPrice: '280,000',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
      discount: '-18%',
      rating: 4.8
    }
  ];

  // Dữ liệu mẫu cho sách Kinh tế
  const booksKinhTe: Book[] = [
    {
      id: 13,
      title: 'The Little Book - Đầu Tư Phòng Thủ',
      author: 'John C. Bogle',
      price: '179,000',
      oldPrice: '239,000',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop',
      discount: '-25%',
      rating: 4.9
    },
    {
      id: 14,
      title: 'Mượn Gà Đẻ Trứng',
      author: 'Robert Kiyosaki',
      price: '189,000',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      rating: 4.6
    },
    {
      id: 15,
      title: 'Khởi Nghiệp Tinh Gọn',
      author: 'Eric Ries',
      price: '165,000',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop',
      rating: 4.7
    },
    {
      id: 16,
      title: 'Nghệ Thuật Bán Hàng',
      author: 'Zig Ziglar',
      price: '145,000',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      rating: 4.5
    }
  ];

  // Dữ liệu sách Thiếu nhi
  const booksThieuNhi: Book[] = [
    {
      id: 17,
      title: 'Nhà Giả Kim',
      author: 'Paulo Coelho',
      price: '89,000',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&h=400&fit=crop',
      rating: 5.0
    },
    {
      id: 18,
      title: 'Dế Mèn Phiêu Lưu Ký',
      author: 'Tô Hoài',
      price: '65,000',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=400&fit=crop',
      rating: 4.8
    },
    {
      id: 19,
      title: 'Những Cuộc Phiêu Lưu Của Tom Sawyer',
      author: 'Mark Twain',
      price: '125,000',
      oldPrice: '155,000',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop',
      discount: '-19%',
      rating: 4.7
    },
    {
      id: 20,
      title: 'Harry Potter Và Hòn Đá Phù Thủy',
      author: 'J.K. Rowling',
      price: '199,000',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=400&fit=crop',
      rating: 5.0
    }
  ];

  const handleBookClick = (book: Book) => {
    navigate(`/book/${book.id}`, { state: { book, allBooks: [...booksVanHoc, ...booksTamLy, ...booksKinhTe, ...booksThieuNhi] } });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        {/* Sidebar - chiếm 1 cột */}
        <div className="col-span-1 bg-gray-100 p-4 rounded-lg h-fit">
          <h3 className="font-bold text-lg mb-4">Danh Mục Sách</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">📚 Văn Học</li>
            <li className="hover:text-red-600 cursor-pointer">🧠 Tâm Lý</li>
            <li className="hover:text-red-600 cursor-pointer">💼 Kinh Tế</li>
            <li className="hover:text-red-600 cursor-pointer">🎨 Thiếu Nhi</li>
            <li className="hover:text-red-600 cursor-pointer">📖 Giáo Khoa</li>
            <li className="hover:text-red-600 cursor-pointer">🎓 Học Ngoại Ngữ</li>
          </ul>
        </div>
        
        {/* Nội dung phải - Banner + Books */}
        <div className="col-span-3 space-y-4">
          {/* Banner - giới hạn chiều cao */}
          <div className="w-full h-96 overflow-hidden rounded-lg">
            <Banner />
          </div>
          
          {/* Sách */}
          <div>
            <BookSection 
              title="📚 Sách Văn Học Nước Ngoài" 
              books={booksVanHoc}
              onBookClick={handleBookClick}
            />
            <BookSection 
              title="🧠 Sách Tâm Lý - Kỹ Năng Sống" 
              books={booksTamLy}
              onBookClick={handleBookClick}
            />
            <BookSection 
              title="💼 Sách Kinh Tế" 
              books={booksKinhTe}
              onBookClick={handleBookClick}
            />
            <BookSection 
              title="🎨 Sách Thiếu Nhi" 
              books={booksThieuNhi}
              onBookClick={handleBookClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
