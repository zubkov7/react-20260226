import { ReviewContainer } from "../review/review-container";
import { use } from "react";
import { AuthContext } from "../auth-context";
import { ReviewForm } from "../review-form/review-form";

export const Reviews = ({ reviewsIds, onAddReview }) => {
  const { auth } = use(AuthContext);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewsIds?.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer id={reviewId} />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && <ReviewForm onSubmit={onAddReview} />}
    </div>
  );
};
