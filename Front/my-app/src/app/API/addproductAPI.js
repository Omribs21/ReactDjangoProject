import axios from "axios";

const URL = "http://127.0.0.1:8000/addProduct/";

export function AddNewProduct(data) { // {desc:dad, price:100, category:1,size:xl}
    console.log(data)
    return new Promise((resolve) =>
      axios.post(URL, {
        desc:data.desc,
        price:data.price,
        category:data.category,

      }).then((res) => resolve({ data: res.data }))
    );
  }