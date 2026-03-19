import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Button } from "../button/button";
import { Link, NavLink, useNavigate } from "react-router";

export const HeadphoneTabContainer = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const navigate = useNavigate();
  // navigate('/contacts');

  return (
    <NavLink
      className={({ isActive }) => isActive && "activeClass"}
      to={`/headphone/${id}`}
    >
      {({ isActive }) => {
        return isActive ? <div>active</div> : headphone.name;
      }}
    </NavLink>
  );
};
