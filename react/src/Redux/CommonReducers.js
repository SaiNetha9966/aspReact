import INITIAL_STATE from "./IntialState"

import {brandsReducer} from "./Reducers"

const reducers = {
    GET_BRAND_START : brandsReducer,
    GET_BRAND_SUCCESS : brandsReducer,
    GET_BRAND_FAILURE : brandsReducer
}

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};