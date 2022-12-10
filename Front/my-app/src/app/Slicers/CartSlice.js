import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('cartItems') != null ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const totalAmount = localStorage.getItem('totalAmount') != null ?
    JSON.parse(localStorage.getItem('totalAmount')) : 0

const totalQuantity = localStorage.getItem('totalQuantity') != null ?
    JSON.parse(localStorage.getItem('totalQuantity')) : 0

const setItemFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem('cartItems', JSON.stringify(item))
    localStorage.setItem('totalAmount', JSON.stringify(totalAmount));
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
}
const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity += newItem.quantity;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    desc: newItem.desc,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    number :newItem.number,
                    size : newItem.size,
                    patch :newItem.patch,
                    comments: newItem.comments,
                    total: newItem.total
                });
            }
            else {
                existingItem.quantity += newItem.quantity;
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0

            );

            setItemFunc(state.cartItems.map((item) => item), state.totalAmount, state.totalQuantity);
            
        },

        removeItem(state, action) {
            const id = action.payload;
            
            const existingItem = state.cartItems.find((item) => item.id == id);
            state.totalQuantity--;

            if (existingItem.quantity == 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) - Number(existingItem.price);
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );

            setItemFunc(state.cartItems.map((item) => item), state.totalAmount, state.totalQuantity);
            console.table(items)
        },

        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0
            );
            setItemFunc(state.cartItems.map((item) => item), state.totalAmount, state.totalQuantity);
            console.table(items)
        },
        cleanCart(state){
            setItemFunc(state.cartItems = [],state.totalAmount = 0,state.totalQuantity= 0)
        }

    }

});

export const { addItem,removeItem,deleteItem,cleanCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selecttotalQuantity = (state) => state.cart.totalQuantity
export const selecttotalAmount = (state) => state.cart.totalAmount
export const selectItems = (state) => state.cart.items;
export default cartSlice.reducer;
