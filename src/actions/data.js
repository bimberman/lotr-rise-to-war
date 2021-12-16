import React from "react";
import { batch } from "react-redux";
import axios from "axios";
import { SET_ACTIVE_FACTION } from "../constants/actionTypes";

export const setActiveFaction = (newPage) => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_FACTION,
    payload: newPage,
  });
};
