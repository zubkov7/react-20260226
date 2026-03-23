import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphonesIds } from "./slice";

export const getHeadphones = createAsyncThunk(
  "headphone/getHeadphones",
  async (_, { dispatch, getState, rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/products");

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectHeadphonesIds(getState()).length === 0;
    },
  },
);
