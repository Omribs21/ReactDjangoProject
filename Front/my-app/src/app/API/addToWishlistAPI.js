import axios from "axios";

const URL = "http://127.0.0.1:8000/AddToWishlist/";

export function AddToWishlist(data) {
  console.log(data)
  const newData = {prod_id:data.prod_id,Token:data.Token}
  return new Promise((resolve) =>
    axios.post(URL, newData,
        {
            headers:{
                Authorization:`Bearer ${data.Token}`,
            },
        }).then((res) => resolve({ data: res.data }))
  );
}