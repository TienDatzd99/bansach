# 📚 Vinabook - Nhà sách trực tuyến

Website thương mại điện tử bán sách trực tuyến được xây dựng bằng React + TypeScript, thiết kế giống Vinabook.com

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)

## ✨ Tính năng

### 🎨 Giao diện
- ✅ **Header đa chức năng**
  - Banner khuyến mãi với hotline và email
  - Logo và tagline thu hút
  - Thanh tìm kiếm thông minh
  - Dropdown menu cho danh mục
  - Giỏ hàng với badge số lượng
  - Menu điều hướng với hiệu ứng hover

- ✅ **Banner Slider tự động**
  - 3 slides với gradient đẹp mắt
  - Tự động chuyển mỗi 5 giây
  - Dots navigation để chuyển slide thủ công
  - Animation mượt mà

- ✅ **Book Cards chuyên nghiệp**
  - Hình ảnh sách thật từ Unsplash
  - Rating 5 sao với số đánh giá
  - Hiển thị tác giả
  - Giá cũ/mới với % giảm giá
  - Quick view overlay khi hover
  - Animation hover 3D
  - Nút "Thêm vào giỏ" với gradient

- ✅ **Book Sections**
  - 4 danh mục: Văn học, Tâm lý, Kinh tế, Thiếu nhi
  - Grid layout responsive
  - Tiêu đề với underline gradient
  - Background xen kẽ

- ✅ **Footer đầy đủ**
  - 4 cột thông tin
  - Links hữu ích
  - Thông tin liên hệ
  - Social media
  - Responsive grid

- ✅ **Scroll to Top**
  - Nút tròn gradient
  - Hiện khi scroll > 300px
  - Smooth scroll animation

### 🎯 UX Features
- Hover effects trên tất cả elements
- Smooth transitions và animations
- Loading states (shimmer effect)
- Responsive design (mobile-first)
- Custom scrollbar với màu brand
- Selection color matching theme

## 🚀 Cài đặt

\`\`\`bash
# Clone repository
git clone <repository-url>
cd my-react-app

# Cài đặt dependencies
npm install --legacy-peer-deps

# Khởi động development server
npm start
\`\`\`

Ứng dụng sẽ chạy tại: **http://localhost:3000**

## 📦 Build production

\`\`\`bash
npm run build
\`\`\`

## 🛠️ Technology Stack

- **React 18.3.1** - UI Library
- **TypeScript 4.9.5** - Type safety
- **React Scripts 5.0.1** - Build tools
- **CSS3** - Styling (no frameworks, pure CSS)
- **Unsplash** - Stock images for book covers

## 📁 Cấu trúc dự án

\`\`\`
my-react-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.tsx / Header.css
│   │   ├── Banner.tsx / Banner.css
│   │   ├── BookCard.tsx / BookCard.css
│   │   ├── BookSection.tsx / BookSection.css
│   │   ├── Footer.tsx / Footer.css
│   │   ├── ScrollToTop.tsx / ScrollToTop.css
│   │   └── index.ts
│   ├── styles/
│   │   └── App.css
│   ├── hooks/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## 🎨 Màu sắc chủ đạo

- **Primary Red**: `#d32f2f` (Logo, CTA, highlights)
- **Dark Red**: `#b71c1c` (Gradients, hover states)
- **Background**: `#f9f9f9` (Sections)
- **Dark Gray**: `#2c3e50` (Footer)
- **Text**: `#333` (Body text)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Customize

Để thay đổi dữ liệu sách, chỉnh sửa file `src/App.tsx`:

\`\`\`typescript
const booksVanHoc = [
  {
    id: 1,
    title: 'Tên sách',
    author: 'Tác giả',
    price: '100,000',
    oldPrice: '150,000',
    image: 'URL hình ảnh',
    discount: '-33%',
    rating: 4.5
  },
  // ... thêm sách
];
\`\`\`

## 🐛 Troubleshooting

### Lỗi `ajv/dist/compile/codegen`
\`\`\`bash
npm install ajv@6.12.6 ajv-keywords@3.5.2 --save-dev --legacy-peer-deps
npm install --legacy-peer-deps
\`\`\`

### Permission denied errors
\`\`\`bash
sudo chown -R $(whoami) ~/.npm
\`\`\`

## 📝 License

MIT License - tự do sử dụng cho mục đích học tập và thương mại.

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Pull requests và issues luôn sẵn sàng.

---

Made with ❤️ using React + TypeScript
\`\`\`