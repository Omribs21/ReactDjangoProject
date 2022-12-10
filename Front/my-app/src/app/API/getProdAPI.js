import axios from "axios";

const URL = "http://127.0.0.1:8000/products/";

export function getProdById(id) {
  console.log(URL + id)
  return new Promise((resolve) =>
    axios.get(URL + id).then((res) => resolve({ data : res.data}))
  );
}