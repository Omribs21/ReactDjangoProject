import axios from "axios";

const URL = "http://127.0.0.1:8000/register/";

export function Register(data) {
  console.log(data);
  return new Promise((resolve) =>
    axios.post(URL, data).then((res) => resolve({ data: res.data }))
  );
}