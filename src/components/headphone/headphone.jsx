import { Codecs } from "../codecs/codecs";
import { Counter } from "../counter/counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";

import styles from "./headphone.module.css";

export const Headphone = ({ name, brand, reviews, codecs }) => {
  console.log(styles);
  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3 className={styles.brand}>Brand</h3>
      <div>{brand}</div>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <Codecs codecs={codecs} />
      <Counter />
      <ReviewForm />
    </section>
  );
};
