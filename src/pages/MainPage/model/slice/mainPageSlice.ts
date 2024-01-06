import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const MainPageSlice = createSlice({
  name: 'MainPageSlice',
  initialState,
  reducers: {
  },
});

export const { actions: MainPageSliceActions } = MainPageSlice;
export const { reducer: MainPageSliceReducer } = MainPageSlice;
