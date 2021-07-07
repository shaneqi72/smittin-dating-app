import { ActionTypes } from "../../store/constants/action-types";

const initialState = {
  day: "",
  time: "",
  theme: "",
  location: "",
  chooseLocation: false,
};

export const datingInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DATING_DAY_TIME:
      return { ...state, day: action.payload.day, time: action.payload.time };
    case ActionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    case ActionTypes.SET_LOCATION:
      return { ...state, location: action.payload };
    case ActionTypes.SET_INPUT_LOCATION:
      return { ...state, chooseLocation: action.payload };
    default:
      return state;
  }
};
