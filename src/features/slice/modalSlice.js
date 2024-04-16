import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  isupdating: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    openUpdateForm: (state, action) => {
      state.isupdating = true;
    },
    closeUpdateForm: (state, action) => {
      state.isupdating = false;
    },
  },
});
export const { openModal, closeModal, openUpdateForm, closeUpdateForm } =
  modalSlice.actions;
export default modalSlice.reducer;
