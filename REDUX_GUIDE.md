# Hướng dẫn sử dụng Redux trong dự án

## Cấu trúc Redux đã thiết lập

```
src/
├── store/
│   ├── index.ts              # Cấu hình Redux store
│   ├── hooks.ts              # Custom hooks (useAppDispatch, useAppSelector)
│   └── slices/
│       ├── booksSlice.ts     # Quản lý dữ liệu sách
│       ├── cartSlice.ts      # Quản lý giỏ hàng
│       └── selectors.ts      # Selectors để lấy dữ liệu
```

## Cách sử dụng

### 1. Lấy dữ liệu từ Redux Store

```tsx
import { useAppSelector } from '../store/hooks';
import { selectCartItems, selectCartTotalItems } from '../store/slices/selectors';

const MyComponent = () => {
  // Lấy danh sách sản phẩm trong giỏ hàng
  const cartItems = useAppSelector(selectCartItems);
  
  // Lấy tổng số lượng sản phẩm
  const totalItems = useAppSelector(selectCartTotalItems);
  
  return <div>{totalItems} sản phẩm</div>;
};
```

### 2. Dispatch actions (thêm, xóa, cập nhật)

```tsx
import { useAppDispatch } from '../store/hooks';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';

const ProductCard = ({ book }) => {
  const dispatch = useAppDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };
  
  const handleRemove = () => {
    dispatch(removeFromCart(book.id));
  };
  
  return (
    <div>
      <button onClick={handleAddToCart}>Thêm vào giỏ</button>
      <button onClick={handleRemove}>Xóa</button>
    </div>
  );
};
```

### 3. Fetch dữ liệu từ API

```tsx
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchBooks, fetchFeaturedBooks } from '../store/slices/booksSlice';
import { selectAllBooks, selectBooksLoading } from '../store/slices/selectors';

const BooksPage = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectAllBooks);
  const loading = useAppSelector(selectBooksLoading);
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  
  if (loading) return <div>Đang tải...</div>;
  
  return (
    <div>
      {books.map(book => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};
```

## Actions có sẵn

### Cart Actions
- `addToCart(book)` - Thêm sách vào giỏ hàng
- `removeFromCart(id)` - Xóa sách khỏi giỏ hàng
- `updateQuantity({ id, quantity })` - Cập nhật số lượng
- `incrementQuantity(id)` - Tăng số lượng
- `decrementQuantity(id)` - Giảm số lượng
- `clearCart()` - Xóa toàn bộ giỏ hàng

### Books Actions
- `fetchBooks()` - Lấy danh sách tất cả sách
- `fetchFeaturedBooks()` - Lấy sách nổi bật
- `setBooks(books[])` - Set danh sách sách
- `setFeaturedBooks(books[])` - Set sách nổi bật

## Selectors có sẵn

### Cart Selectors
- `selectCartItems` - Lấy tất cả items trong giỏ
- `selectCartTotalItems` - Tổng số lượng sản phẩm
- `selectCartTotalPrice` - Tổng giá trị giỏ hàng
- `selectCartItemById(id)` - Lấy item theo ID

### Books Selectors
- `selectAllBooks` - Tất cả sách
- `selectFeaturedBooks` - Sách nổi bật
- `selectBooksLoading` - Trạng thái loading
- `selectBooksError` - Lỗi nếu có
- `selectBookById(id)` - Lấy sách theo ID

## Kết nối với API Backend

Cập nhật URL API trong `booksSlice.ts`:

```typescript
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await fetch('http://your-api-url/api/books');
    const data = await response.json();
    return data;
  }
);
```

## Ví dụ Component hoàn chỉnh

```tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchBooks } from '../store/slices/booksSlice';
import { addToCart } from '../store/slices/cartSlice';
import { selectAllBooks, selectBooksLoading } from '../store/slices/selectors';

const BooksList = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectAllBooks);
  const loading = useAppSelector(selectBooksLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  if (loading) return <div>Đang tải sách...</div>;

  return (
    <div className="books-grid">
      {books.map(book => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.price}₫</p>
          <button onClick={() => handleAddToCart(book)}>
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
```
