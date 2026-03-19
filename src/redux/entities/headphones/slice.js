import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedHeadphones.reduce((acc, headphone) => {
    acc[headphone.id] = headphone;

    return acc;
  }, {}),
  ids: normalizedHeadphones.map(({ id }) => id),
};

export const headphoneSlice = createSlice({
  name: "headphone",
  initialState,
  selectors: {
    selectHeadphoneById: (state, headphoneId) => state.entities[headphoneId],
    selectHeadphoneIds: (state) => state.ids,
  },
});

export const { selectHeadphoneById, selectHeadphoneIds } =
  headphoneSlice.selectors;

// export const selectHeadphoneSlice = (state) => state[headphoneSlice.name];

// export const selectHeadphoneById = (state, headphoneId) =>
//   selectHeadphoneSlice(state).entities[headphoneId];

// export const selectHeadphoneIds = (state) => selectHeadphoneSlice(state).ids;
