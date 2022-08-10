import { createSlice } from "@reduxjs/toolkit";
import productsJSON from "../../products.json";

const data = productsJSON.products;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data,
    money: "100,000,000,000",
    initialMoney: "100,000,000,000",
  },
  reducers: {},
});

export default productsSlice.reducer;
