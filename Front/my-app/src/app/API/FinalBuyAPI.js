import axios from "axios";

const URL = "http://127.0.0.1:8000/addOrder/";

export function AddOrder(data) {
  console.log(data)
  return new Promise((resolve) =>
    axios.post(URL, data,
        {
            headers:{
                Authorization:`Bearer ${data.Token}`,
            },
        }).then((res) => resolve({ data: res.data }))
  );
}