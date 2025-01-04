import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: 0,
  reducers: {
    exampleAction: (state, action) => {
      return state + action.payload;
    },
  },
});

const rootReducer = combineReducers({
  example: exampleSlice.reducer,
});

export const { exampleAction } = exampleSlice.actions;
export default rootReducer;
