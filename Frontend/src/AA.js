import { message } from "antd";
import axios from "axios";

import React, { useState } from "react";

export function AA(props) { //Async & Await Example
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const getData = async () => {
    // debugger;
    console.log("button clicked");

    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(resp.data);
    } catch (error) {
      setError(data!=200);
      alert("this issue is coming from API side", error.message);
    }
  };

  return (
    <>
      <button type="button" onClick={getData}>
        Get Data
      </button>
      {data.map((data) => {
        return (
          <div>
         {data.title}
         
        </div>
        )
        
      })}
    </>
  );
}
