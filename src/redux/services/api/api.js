import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (headphoneId) => `/reviews?productId=${headphoneId}`,
      providesTags: () => [{ type: "reviews", id: "ALL" }],
    }),
    getHeadphones: builder.query({
      query: () => `/products`,
    }),
    addReview: builder.mutation({
      query: ({ headphoneId, review }) => ({
        url: `/review/${headphoneId}`,
        body: review,
        method: "POST",
      }),
      invalidatesTags: () => [{ type: "reviews", id: "ALL" }],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useLazyGetReviewsQuery,
  useGetHeadphonesQuery,
  useAddReviewMutation,
} = api;
