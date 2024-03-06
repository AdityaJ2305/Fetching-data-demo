import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    // const response = fetch("https://dummyjson.com/products")
    // .then((res) => res.json())
    // .then((js) => setData(js.products));

    async function fetchData(){
      let response = await axios.get("https://dummyjson.com/products");
      console.log(response.data)
      setData(response.data.products)
    }
    fetchData();
  },[])
  

  return (
  <>
  <div className="main">
  <ul>
  {data.map((value,index)=><li key={index} style={{listStyle:"none"}}><img src={value.thumbnail}/> <br/> {value.title}<br/> {value.description} <button>Add ${value.price}</button></li>)}
  </ul>
  </div>
  </>
  );
}

export default App;
