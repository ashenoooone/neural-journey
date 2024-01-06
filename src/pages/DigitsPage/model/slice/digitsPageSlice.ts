import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const DigitsPageSlice = createSlice({
  name: 'DigitsPageSlice',
  initialState,
  reducers: {
  },
});

export const { actions: DigitsPageSliceActions } = DigitsPageSlice;
export const { reducer: DigitsPageSliceReducer } = DigitsPageSlice;
