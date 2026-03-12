import { act, useReducer, useState } from "react";

const INITIAL_FORM = {
  name: "",
  address: "",
  text: "",
};

const SET_NAME_ACTION = "setNameAction";
const SET_ADDRESS_ACTION = "setAddressAction";
const SET_TEXT_ACTION = "setTextAction";
const CLEAR_FORM_ACTION = "clearFormAction";

// action = { type: string; payload: any }

// dispatch(action);

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION:
      return { ...INITIAL_FORM, name: payload };
    case SET_ADDRESS_ACTION:
      return { ...state, address: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case CLEAR_FORM_ACTION:
    default:
      return INITIAL_FORM;
  }
};

export const ReviewForm = (props) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, address, text } = form;

  //   const [name, setName] = useState("");
  //   const [text, setText] = useState("");
  //   const [address, setAddress] = useState("");

  return (
    <form>
      <div>
        <label>name:</label>
        <input
          value={name}
          onChange={(event) => {
            dispatch({ type: SET_NAME_ACTION, payload: event.target.value });
          }}
        />
      </div>
      <div>
        <label>address:</label>
        <input
          value={address}
          onChange={(event) =>
            dispatch({ type: SET_ADDRESS_ACTION, payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>text:</label>
        <input
          value={text}
          onChange={(event) =>
            dispatch({ type: SET_TEXT_ACTION, payload: event.target.value })
          }
        />
      </div>
    </form>
  );
};
