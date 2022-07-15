import axios from "axios";
import React, { useState } from "react";

export function Getusersdata(props) {
  const [data, setData] = useState([]);
  function Button() {
    debugger;
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((response) => setData(response.data));
    console.log(data);
  }

  return (
    <>
      <button type="button" onClick={Button}>
        Click Me
      </button>
      {data.map((data) => {
        return <h1>{data.name}</h1>;
      })}
    </>
  );
}
