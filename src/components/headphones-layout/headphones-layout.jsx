import { useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Button } from "../button/button";
import { Tabs } from "../tabs/tabs";
import { HeadphoneContainer } from "../headphone/headphone-container";
import { useSelector } from "react-redux";
import { selectHeadphoneIds } from "../../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";
import { Outlet } from "react-router";

export const HeadphonesLayout = () => {
  const headphoneIds = useSelector(selectHeadphoneIds);
  // const [activeHeadphoneId, setActiveHeadphoneId] = useState(null);

  // const handleSetActiveHeadphoneId = (id) => {
  //   if (activeHeadphoneId === id) {
  //     return;
  //   }

  //   setActiveHeadphoneId(id);
  // };

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphoneIds.map((id) => (
          <HeadphoneTabContainer
            key={id}
            id={id}
            // onClick={() => handleSetActiveHeadphoneId(id)}
            // disabled={id === activeHeadphoneId}
          />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
