import { Tabs } from "../components/tabs/tabs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHeadphonesIds,
  selectRequestStatus,
} from "../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../components/headphone-tab/headphone-tab-container";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { getHeadphones } from "../redux/entities/headphones/get-headphones";
import { useGetHeadphonesQuery } from "../redux/services/api/api";

export const HeadphonesPage = () => {
  const dispatch = useDispatch();

  const headphonesIds = useSelector(selectHeadphonesIds);
  const requestStatus = useSelector(selectRequestStatus);
  useGetHeadphonesQuery();

  useEffect(() => {
    dispatch(getHeadphones());
  }, [dispatch]);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading ...";
  }

  if (requestStatus === "rejected" || headphonesIds.length === 0) {
    return "no data";
  }

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
