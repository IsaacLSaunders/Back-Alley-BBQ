import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MeatState { 
  meat: string;
  cut: string;
  details: {
    weight: number;
    trimmed: boolean;
  }
  wholeOrFilet: string;
  cookingMethod: string;
}

const initialState: MeatState = {
  meat: '',
  cut: '',
  details: {
    weight: 0,
    trimmed: false
  },
  wholeOrFilet: '',
  cookingMethod: '',
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
    },
    setDetailsWeight: (state, action: PayloadAction<number>) => {
      state.details.weight = action.payload;
    },
    setDetailsTrimmed: (state, action: PayloadAction<boolean>) => {
      state.details.trimmed = action.payload;
    },
    setDetailsFish: (state, action: PayloadAction<string>) => {
      state.wholeOrFilet = action.payload;
    },
    setCookingMethod: (state, action: PayloadAction<string>) => {
      state.cookingMethod = action.payload;
    },
  },
});

export const { setMeat, setCut, setDetailsWeight, setDetailsTrimmed, setDetailsFish, setCookingMethod } = calcSlice.actions;

export default calcSlice.reducer;