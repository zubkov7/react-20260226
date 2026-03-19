import { useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Button } from "../button/button";
import { Tabs } from "../tabs/tabs";
import { HeadphoneContainer } from "../headphone/headphone-container";
import { useSelector } from "react-redux";
import { selectHeadphoneIds } from "../../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";
import { useParams, useResolvedPath } from "react-router";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  return <HeadphoneContainer id={headphoneId} />;
};
