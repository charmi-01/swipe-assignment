import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const itemList = action.payload;
      itemList.forEach((item) => {
        const existingProductIndex = state.findIndex(
          (product) => product.name === item.itemName
        );

        if (existingProductIndex !== -1) {
          // Update the existing product
          state[existingProductIndex] = {
            ...state[existingProductIndex],
            description: item.itemDescription,
            group: item.itemGroup,
          };
        } else {
          // Add the new product
          state.push({
            number: state.length + 1,
            name: item.itemName,
            description: item.itemDescription,
            group: item.itemGroup,
          });
        }
      });
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.name === action.payload.updatedProductName
      );
      console.log(index)
      if (index !== -1) {
        state[index] = action.payload.updatedProduct;
      }
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  updateProduct,
} = productsSlice.actions;

export const selectProductsList = (state) => state.products;

export default productsSlice.reducer;