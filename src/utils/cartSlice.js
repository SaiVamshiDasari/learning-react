// src/features/cart/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.card?.info?.id === action.payload.card?.info?.id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.card?.info?.id === action.payload.card?.info?.id);
            if (existingItem) {
                if (existingItem.count > 1) {
                    existingItem.count -= 1;
                } else {
                    state.items = state.items.filter(item => item.card?.info?.id !== action.payload.card?.info?.id);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
