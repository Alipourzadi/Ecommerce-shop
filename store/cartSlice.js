import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, price } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        state.items.push({ id, name, price, quantity: 1 });
      } else {
        state.items[itemIndex].quantity += 1;
      }
      state.totalPrice += price;
    },
    removeItem: (state, action) => {
      const { id, price, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity -= 1;
      }
      state.totalPrice -= price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
