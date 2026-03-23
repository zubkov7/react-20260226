import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Headphone } from "./headphone";
import {
  useAddReviewMutation,
  useGetHeadphonesQuery,
} from "../../redux/services/api/api";
import { useEffect } from "react";

export const HeadphoneContainer = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const { data } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: headphoneId }) => headphoneId === id),
    }),
  });

  const [addReview, { isError }] = useAddReviewMutation();

  const { name, brand, reviews, codecs } = headphone || {};

  useEffect(() => {
    addReview({
      headphoneId: id,
      review: { text: "text", user: "asdasdoi29tu384f", rating: 5 },
    });
  }, []);

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={id}
    />
  );
};
