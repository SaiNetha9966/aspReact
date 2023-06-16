import axios from "axios";

import {brandAction} from "./Actions"
import * as Constants from "./Constants";


const headers = {
     "Content-Type": "application/json",
}
export const getBrands = () => async (dispatch) => {
  dispatch(brandAction(Constants.GET_BRAND_START, {}, "", true));
   var config = {
    method: "get",
    url:"http://localhost:5104/api/Brand",
    headers:headers
 };

  await axios(config)
    .then((response) => {
        console.log("response" , response)
      dispatch(
        brandAction(
          Constants.GET_BRAND_SUCCESS,
          response.data.Message,
          "Successful",
          false
        )
        
      );
    })
    
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            brandAction(
              Constants.GET_BRAND_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 403) {
          dispatch(
            brandAction(
              Constants.GET_BRAND_FAILURE,
              {},
              "Session Has Expired",
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            brandAction(
              Constants.GET_BRAND_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else
          dispatch(
            brandAction(
              Constants.GET_BRAND_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};