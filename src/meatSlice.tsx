import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MeatState { 
  meat: string;
  cut: string;
}

const initialState: MeatState = {
  meat: '',
  cut: ''
};

export const calcSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setMeat: (state, action: PayloadAction<string>) => {
      state.meat = action.payload;
    },
    setCut: (state, action: PayloadAction<string>) => {
      state.cut = action.payload;
    }
  },
});

export const { setMeat, setCut } = calcSlice.actions;

export default calcSlice.reducer;