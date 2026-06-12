import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const{name, image, cost} = action.payload;
        const existingitems = state.items.find(items=>items.name === name);
        if(existingitems){
            existingitems.quantity++;
        }
        else{
            state.items.push({name, image, cost, quantity:1});
        }

    
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(items => items.name != action.payload);
    },


    updateQuantity: (state, action) => {
        const{name, quantity } = action.payload;
        const existingitems = state.items.find(items=>items.name === name);
        if(existingitems){
            existingitems.quantity = quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
