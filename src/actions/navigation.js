import React from "react";
import { batch } from "react-redux";
import axios from "axios";
import { ADD_NEW_PAGE } from "../constants/actionTypes";
import { APP_PAGES } from "../constants/default";

export const addNewPage = (newPageValue) => (dispatch, getState) => {
  let newPageIndex = 0;

  for (const [pi, page] of APP_PAGES.entries()) {
    if (page.value === newPageValue) {
      newPageIndex = pi;
      break;
    }
  }

  dispatch({
    type: ADD_NEW_PAGE,
    payload: newPageIndex,
  });
};
