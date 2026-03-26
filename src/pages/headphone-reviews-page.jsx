import { useParams } from "react-router";
import { selectHeadphoneById } from "../redux/entities/headphones/slice";
import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "../components/reviews/reviews";
import { getUsers } from "../redux/entities/users/get-users";
import { useRequest } from "../redux/hooks/use-request";
import { getReviewsByHeadphoneId } from "../redux/entities/reviews/get-reviews-by-headphone-id";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants";
import { useCallback, useContext } from "react";
import { AuthContext } from "../components/auth-context";
import { addReviewByHeadphoneId } from "../redux/entities/reviews/add-review-by-headphone-id";

export const HeadphoneReviewsPage = () => {
  const { auth } = useContext(AuthContext);
  const { headphoneId } = useParams();
  const dispatch = useDispatch();

  const usersRequestStatus = useRequest(getUsers);
  const reviewsRequestStatus = useRequest(getReviewsByHeadphoneId, headphoneId);

  const isLoading =
    usersRequestStatus === REQUEST_STATUS_PENDING ||
    reviewsRequestStatus === REQUEST_STATUS_PENDING;

  const isError =
    usersRequestStatus === REQUEST_STATUS_REJECTED ||
    reviewsRequestStatus === REQUEST_STATUS_REJECTED;

  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId),
  );

  const { reviews } = headphone || {};

  const handleAddReview = useCallback(
    (review) => {
      dispatch(
        addReviewByHeadphoneId({
          headphoneId,
          review: { ...review, user: auth?.id },
        }),
      );
    },
    [auth?.id, dispatch, headphoneId],
  );

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return reviews.length ? (
    <Reviews reviewsIds={reviews} onAddReview={handleAddReview} />
  ) : (
    <div>empty review</div>
  );
};
