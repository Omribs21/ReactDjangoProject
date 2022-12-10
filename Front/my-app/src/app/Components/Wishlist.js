import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetWishlistAsync } from '../Slicers/getWishlistSlice'
import { selectproductswishlist } from '../Slicers/getWishlistSlice'
import { selectToken } from '../Slicers/loginSlice'
import { GetAllProductsAsync, selectAllprods } from '../Slicers/GetAllProductsSlice'

const Wishlist = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const Wishlistproducts = useSelector(selectproductswishlist)
  const allProds = useSelector(selectAllprods)
  
  useEffect(() => {
    GetWishlistAsync({ "Token": token });
    console.log(Wishlistproducts)
    GetAllProductsAsync();
    console.log(allProds)
  }, [token.length])

  return (
    <div>
      <button onClick={() => { dispatch(GetWishlistAsync({ "Token": token })) }}>Show My Wishlist</button>
      <div>
        {Wishlistproducts.length > 0 ? Wishlistproducts.map((prod) =>
          <div>
            Product: {allProds[prod.prod_id].desc} <br></br>
            Price: {allProds[prod.prod_id].price}
          </div>)
         : null}     
      </div>


      {/* <div class="inner-header flex">
          <svg version="1.1" class="logo" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
            <path fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-miterlimit="10" d="M57,283" />
          </svg>
        </div>  */}

      {/* <div>
          <svg class="waves" xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>  */}
      {/* </div> */}

    </div>
  )
}

export default Wishlist