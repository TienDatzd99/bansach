# 🎨 Tailwind CSS - Hướng dẫn sử dụng

## ✅ Đã cài đặt thành công!

Tailwind CSS đã được tích hợp vào dự án với cấu hình tùy chỉnh cho Vinabook.

## 🎯 Custom Theme

### Colors
```jsx
// Primary (Đỏ Vinabook)
className="bg-primary"        // #d32f2f
className="bg-primary-dark"   // #b71c1c
className="bg-primary-light"  // #ff5252

// Secondary (Tím gradient)
className="bg-secondary"      // #667eea
className="bg-secondary-dark" // #764ba2

// Gradients
className="bg-gradient-to-r from-primary to-primary-dark"
className="bg-gradient-to-r from-secondary to-secondary-dark"
```

### Custom Classes

```jsx
// Text gradient
className="text-gradient"

// Button gradient
className="btn-gradient text-white px-6 py-3 rounded-lg"

// Card shadows
className="shadow-card"
className="shadow-card-hover"

// Container
className="container" // max-w-7xl mx-auto px-5
```

### Animations
```jsx
className="animate-fade-in"
className="animate-fade-in-down"
className="animate-fade-in-up"
className="animate-pulse-slow"
```

## 📝 Ví dụ sử dụng

### Button
```jsx
<button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105">
  Click me
</button>
```

### Card
```jsx
<div className="bg-white rounded-xl shadow-card hover:shadow-card-hover p-6 transition-all">
  <h3 className="text-xl font-bold mb-2">Tiêu đề</h3>
  <p className="text-gray-600">Nội dung...</p>
</div>
```

### Gradient Text
```jsx
<h1 className="text-4xl font-bold text-gradient">
  Vinabook
</h1>
```

### Grid Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Cards */}
</div>
```

### Flexbox
```jsx
<div className="flex items-center justify-between gap-4">
  {/* Content */}
</div>
```

## 🚀 Responsive Design

```jsx
// Mobile first
className="text-sm md:text-base lg:text-lg"

// Breakpoints
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px

// Ví dụ
className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
```

## 💡 Tips

1. **Kết hợp với CSS modules**: Bạn vẫn có thể dùng file CSS riêng
2. **IntelliSense**: Cài extension "Tailwind CSS IntelliSense" trong VS Code
3. **Purge**: Tailwind tự động loại bỏ CSS không dùng khi build production
4. **Customize**: Chỉnh sửa `tailwind.config.js` để thêm màu/font/animations

## 🎨 Components mẫu

Xem file `TailwindTest.tsx` để thấy ví dụ hoạt động!

## 📚 Tài liệu

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)
