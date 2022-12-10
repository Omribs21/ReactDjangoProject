import CustomizedDialogsModal from './Modal'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { AddNewProdAsync } from '../Slicers/addNewProdSlice';

const ShopingCart = () => {
  const dispatch = useDispatch();
  const [desc, setdesc] = useState("")
  const [price, setprice] = useState()
  const [category, setcategory] = useState()

  
  return (
    <div>
      <CustomizedDialogsModal/>
      
      <input style={{ width: "50%", margin: "auto", fontSize: "17px", blockSize: "50px" }} class="w3-input w3-border w3-round" placeholder='desc' value={desc} onChange={(e) => setdesc(e.target.value)} />
      <input style={{ width: "50%", margin: "auto", fontSize: "17px", blockSize: "50px" }} class="w3-input w3-border w3-round" placeholder='price' value={price} onChange={(e) => setprice(e.target.value)} />
      <input style={{ width: "50%", margin: "auto", fontSize: "17px", blockSize: "50px" }} class="w3-input w3-border w3-round" placeholder='category' value={category} onChange={(e) => setcategory(e.target.value)} />

      <button style={{ width: "30%", margin: "auto" }} class="btn btn-primary btn-lg btn-block" type="button"
                    onClick={() => {
                        dispatch(AddNewProdAsync({ "desc": desc, "price": price, "category":category}))
                        // .then(check(token));

                    }}

                >
                    Add
                </button>
    </div>
  )
}

export default ShopingCart