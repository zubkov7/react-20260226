import { useMemo, useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Tab } from "../tab/tab";

export const HeadphonesPage = ({ title }) => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphones[0].id);
  // const [activeHeadphoneId, setActiveHeadphoneId] = useState(() =>
  //   headphones.find(),
  // );

  const activeHeadphone = useMemo(() => {
    return headphones.find(({ id }) => id === activeHeadphoneId);
  }, [activeHeadphoneId]);

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>{title}</h1>

      {headphones.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveHeadphoneId(id)}
          isActive={id === activeHeadphoneId}
        />
      ))}

      <Headphone
        key={activeHeadphoneId}
        name={activeHeadphone.name}
        brand={activeHeadphone.brand}
        reviews={activeHeadphone.reviews}
        codecs={activeHeadphone.codecs}
      />
    </div>
  );
};
