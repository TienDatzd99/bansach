import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa interface cho Book
export interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  publisher: string;
  publishYear: string;
  description?: string;
  category?: string;
  rating?: number;
  stock?: number;
}

interface BooksState {
  books: Book[];
  featuredBooks: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  featuredBooks: [],
  loading: false,
  error: null,
};

// Async thunk để fetch books từ API
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    // TODO: Thay thế bằng API thực tế của bạn
    const response = await fetch('http://localhost:8080/api/books');
    const data = await response.json();
    return data;
  }
);

// Async thunk để fetch featured books
export const fetchFeaturedBooks = createAsyncThunk(
  'books/fetchFeaturedBooks',
  async () => {
    // TODO: Thay thế bằng API thực tế của bạn
    const response = await fetch('http://localhost:8080/api/books/featured');
    const data = await response.json();
    return data;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Có thể thêm các reducer đồng bộ ở đây nếu cần
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    setFeaturedBooks: (state, action: PayloadAction<Book[]>) => {
      state.featuredBooks = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch books
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch books';
    });

    // Fetch featured books
    builder.addCase(fetchFeaturedBooks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFeaturedBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.featuredBooks = action.payload;
    });
    builder.addCase(fetchFeaturedBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch featured books';
    });
  },
});

export const { setBooks, setFeaturedBooks } = booksSlice.actions;
export default booksSlice.reducer;
