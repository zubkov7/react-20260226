import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";

export const HeadphonesPage = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {headphones.map(({ name, brand, reviews, codecs, id }) => (
          <li key={id}>
            <Headphone
              name={name}
              brand={brand}
              reviews={reviews}
              codecs={codecs}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
