import { useParams } from "react-router";
import { selectHeadphoneById } from "../redux/entities/headphones/slice";
import { useSelector } from "react-redux";
import { Reviews } from "../components/reviews/reviews";
import { useGetReviewsQuery } from "../redux/services/api/api";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId),
  );

  const { reviews } = headphone || {};

  const { data, isError, isFetching, isLoading } =
    useGetReviewsQuery(headphoneId);

  if (isFetching) {
    return "loading reviews ....";
  }

  return reviews.length ? (
    <Reviews reviewsIds={reviews} />
  ) : (
    <div>empty review</div>
  );
};
