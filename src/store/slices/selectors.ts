import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Books selectors
export const selectAllBooks = (state: RootState) => state.books.books;
export const selectFeaturedBooks = (state: RootState) => state.books.featuredBooks;
export const selectBooksLoading = (state: RootState) => state.books.loading;
export const selectBooksError = (state: RootState) => state.books.error;

export const selectBookById = (bookId: number) => 
  createSelector(
    [selectAllBooks],
    (books) => books.find(book => book.id === bookId)
  );

// Cart selectors
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalItems = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => {
    const price = parseInt(item.price.replace(/,/g, ''));
    return total + (price * item.quantity);
  }, 0)
);

export const selectCartItemById = (itemId: number) =>
  createSelector(
    [selectCartItems],
    (items) => items.find(item => item.id === itemId)
  );
