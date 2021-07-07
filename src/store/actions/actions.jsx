import { ActionTypes } from "../constants/action-types";

export const setDateAndTime = (seletedDay, selectedTime) => {
  return {
    type: ActionTypes.SET_DATING_DAY_TIME,
    payload: {
      day: seletedDay,
      time: selectedTime,
    },
  };
};

export const setTheme = (seletedTheme) => {
  return {
    type: ActionTypes.SET_THEME,
    payload: seletedTheme,
  };
};

export const setLoaction = (seletedLocation) => {
  return {
    type: ActionTypes.SET_LOCATION,
    payload: seletedLocation,
  };
};

export const setSearchFiled = (clickSearchFiled) => {
  return {
    type: ActionTypes.SET_LOCATION,
    payload: clickSearchFiled,
  };
};
