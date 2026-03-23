import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

// const initialState = {
//   requestStatus: "idle",
//   ids: [],
//   entities: {},
// };

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphones.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";
        entityAdapter.setAll(state, payload);

        // state.ids = payload.map(({ id }) => id);
        // state.entities = payload.reduce((acc, item) => {
        //   acc[item.id] = item;

        //   return acc;
        // }, {});
      })
      .addCase(getHeadphones.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { payload }) => {
          return state;
        },
      ),
});

export const { selectHeadphonesIds, selectHeadphoneById, selectRequestStatus } =
  headphonesSlice.selectors;

const selectHeadphonesSlice = (state) => state[headphonesSlice.name];

export const { selectById } = entityAdapter.getSelectors(selectHeadphonesSlice);
