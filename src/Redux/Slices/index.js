import AuthSlice from "./AuthSlice";
import GetCategorySlice from "./GetCategorySlice";
import ProductSlice from "./ProductSlice";
import UserSlice from './UserSlice';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
    AuthSlice : AuthSlice,
    ProductSlice : ProductSlice,
    UserSlice : UserSlice,
    GetCategorySlice : GetCategorySlice
});
// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;