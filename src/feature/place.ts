import { createSlice } from "@reduxjs/toolkit";
import { initialStateValue } from "../mock/InitialStateValue";
//import { v4 as uuidv4 } from "uuid";

export interface placeScema {
  place: {
    value: [
      {
        id: string;
        location: string;
        title: string;
        category: string;
        isFavorite: boolean;
        ratings: string;
        price: string;
      }
    ];
  };
}

export const placeSlice = createSlice({
  name: "place",
  initialState: initialStateValue,
  reducers: {
    addPlace: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export default placeSlice.reducer;
