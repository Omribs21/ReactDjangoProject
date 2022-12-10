import axios from "axios";

const URL = "http://127.0.0.1:8000/products/";

export function getallproducts() {
  return new Promise((resolve) =>
    axios.get(URL).then((res) => resolve({ data : res.data}))
  );
}