import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import React, { useState } from "react";

export function Example(props) {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setData(response.data));
    console.log(data);
  }

  function getUserDetails(event) {
    console.log("function called", event.target.value);
    const value=event.target.value
   
    axios
      .post("https://jsonplaceholder.typicode.com/todos",{value})
      .then((response) => setData(response.data));
    console.log(data);
  }
  return (
    <>
      <button type="button" onClick={getData}>
        Get Data
      </button>
      {/* {data.map((data) => {
        return <h1>{data.title}</h1>;
      })} */}

      post data
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={getUserDetails}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={getUserDetails}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
