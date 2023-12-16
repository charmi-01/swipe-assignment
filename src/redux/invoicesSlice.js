import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      console.log("after", state);
      state.push(action.payload);
      console.log("before", state);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {

      console.log("invoice", state);
      console.log("xxx",state.map((invoice) => invoice));

      const index = state.findIndex(
        (invoice) => invoice.id.toString() === action.payload.id.toString()
      );
      console.log(index);
      if (index !== -1) {
        state[index] = action.payload.updatedInvoice;
      }

    },
    updateItemsInInvoices: (state, action) => {
      const { itemName, updatedItemDetails } = action.payload;

      state.forEach((invoice, i) => {
        invoice.items.forEach((item, index) => {
          if (item.itemName === itemName) {
            state[i].items[index] = {
              ...item,
              ...updatedItemDetails,
            };
          }
        });
      });

    },
  },
});

export const {
  addInvoice,
  deleteInvoice,
  updateInvoice,
  updateItemsInInvoices
} = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
