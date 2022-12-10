import axios from "axios";

const URL = "http://127.0.0.1:8000/CleanWishlist/";

export function CleanWishlist(data) {
  console.log(data)
  return new Promise((resolve) =>
    axios.delete(URL,
        {
            headers:{
                Authorization:`Bearer ${data.Token}`,
            },
            data: {
              user_id:data.userID
            }
        }).then((res) => resolve({ data: res.data }))
  );
}