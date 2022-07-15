import React, { useState, useMemo, useEffect} from "react";
import axios from "axios";
import { CustomApi } from "../CustomApi";
// import useFetch from "./useFetch";


const aValue = 10;
const bvalue = 20;
function UMHook() {
  const [users, updateState] = useState("keerthi");
  const [data, updateData] = useState([]);
  const [todos, updateTodos] = useState([]);
  const usersApi = CustomApi("https://jsonplaceholder.typicode.com/users");
  const todosApi = CustomApi("https://jsonplaceholder.typicode.com/todos");

  const add = () => {
    for (let index = 0; index < 1000; index++) {
      console.log(index);
    }
    console.log(parseInt(aValue) + parseInt(bvalue));
  };
  

  return (
    <>
      <div>{users}</div>
      <button type="button" onClick={add}> */
        addtion two big numbers
      /* </button>

      {data.map((data) => {
        const { email, name, phone, website } = data;
        return (
          <div>
            <p>
              {email} <br></br>
              {name}
              <br></br> {phone}
              <br></br> {website}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default UMHook;
