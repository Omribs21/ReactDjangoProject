import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import addNewProdReducer from './Slicers/addNewProdSlice';
import AddToWishlistReducer  from './Slicers/AddToWishlistSlice';
import  cartReducer  from './Slicers/CartSlice';
import CleanWishlistReducer from './Slicers/CleanWishlistSlice';
import  AddOrderReducer  from './Slicers/FinalBuySlice';
import GetAllProductsReducer from './Slicers/GetAllProductsSlice';
import GetProdByIdReducer from './Slicers/GetProdByIdSlice';
import GetProdFromWishlistReducer from './Slicers/GetProdFromWishlistSlice';
import getWishlistReducer from './Slicers/getWishlistSlice';
import loginReducer from './Slicers/loginSlice';
import logoutReducer from './Slicers/logoutSlice';
import orderReducer from './Slicers/orderSlice';
import registerReducer from './Slicers/registerSlice';
import RemoveFromWishlistReducer from './Slicers/RemoveFromWishlistSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register : registerReducer,
    login: loginReducer,
    order :orderReducer,
    logout: logoutReducer,
    addTowishlist: AddToWishlistReducer,
    getwishlist : getWishlistReducer,
    addnewprod: addNewProdReducer,
    Getprodfromwishlist: GetProdFromWishlistReducer,
    getprodbyid: GetProdByIdReducer,
    getallprods: GetAllProductsReducer,
    Removefromwishlist:  RemoveFromWishlistReducer,
    cleanwishlist : CleanWishlistReducer,
    cart: cartReducer,
    addorder:AddOrderReducer,
  },
});
