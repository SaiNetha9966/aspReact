import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getBrands} from "../Redux/Api"
import axios from 'axios';

function Brand() {
      const dispatch = useDispatch();

      const [brand,setBrand] = useState([])

  

      useEffect(() =>{
        dispatch(getBrands())   
      },[])

 const barndData = useSelector((state) => state);
 console.log("barndData" , barndData)
//   const brandMessage = useSelector((state) => state.ruleTypeMessage);
//   const brandLoading = useSelector((state) => state.ruleTypeLoading);

  return (
    <div>Brand</div>
  )
}

export default Brand