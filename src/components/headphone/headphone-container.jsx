import { useSelector } from "react-redux";
import { Headphone } from "./headphone";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";

export const HeadphoneContainer = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  return <Headphone {...headphone} />;
};
