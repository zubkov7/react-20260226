import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphonesIds } from "./slice";

export const addReview = createAsyncThunk(
  "review/addReview",
  async ({ headphoneId, review }, { dispatch, getState, rejectWithValue }) => {
    // add review
    const response = await fetch(
      `http://localhost:3001/api/review/${headphoneId}`,
      {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();

    if (!result.length) {
      // revert
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
