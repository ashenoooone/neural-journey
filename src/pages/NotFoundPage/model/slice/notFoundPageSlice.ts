import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const NotFoundPageSlice = createSlice({
  name: 'NotFoundPageSlice',
  initialState,
  reducers: {
  },
});

export const { actions: NotFoundPageSliceActions } = NotFoundPageSlice;
export const { reducer: NotFoundPageSliceReducer } = NotFoundPageSlice;
