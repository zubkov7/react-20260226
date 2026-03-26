import { createAsyncThunk } from "@reduxjs/toolkit";
import { addReviewByHeadphoneId as addReviewByHeadphoneIdAction } from "../headphones/slice";
import { addReviewByHeadphoneId as addReviewByHeadphoneIdReviewAction } from "./slice";

export const addReviewByHeadphoneId = createAsyncThunk(
  "reviews/addReviewByHeadphoneId",
  async ({ headphoneId, review }, { rejectWithValue, dispatch }) => {
    const response = await fetch(
      `http://localhost:3001/api/review/${headphoneId}`,
      {
        method: "POST",
        body: JSON.stringify(review),
        headers: { ["Content-Type"]: "application/json" },
      },
    );

    const result = await response.json();

    if (!result) {
      rejectWithValue("reviews/addReviewByHeadphoneId");
      return;
    }

    dispatch(addReviewByHeadphoneIdReviewAction(result));
    dispatch(
      addReviewByHeadphoneIdAction({ headphoneId, reviewId: result.id }),
    );

    return result;
  },
);
