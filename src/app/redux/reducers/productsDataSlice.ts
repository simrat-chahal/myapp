import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  productList: [
    { productName: "Cap", price: 250 },
    { productName: "Watch", price: 1250 },
    { productName: "Shirt", price: 1000 },
    { productName: "Jacket", price: 3000 },
  ],
  cartList: [],
  customerDetails: { name: "", email: "", phnNo: "" },
};

export const productsDataSlice = createSlice({
  name: "productList",
  initialState: initialState,
  reducers: {
    addCartItem: (state: any, { payload }: any) => {
      state.cartList.push(payload);
    },
    updateCustomerDetails: (state: any, { payload }) => {
      state.customerDetails[payload.detailsType] = payload.data
    },
  },
});

export const { addCartItem, updateCustomerDetails } = productsDataSlice.actions; //actions
export default productsDataSlice.reducer;
