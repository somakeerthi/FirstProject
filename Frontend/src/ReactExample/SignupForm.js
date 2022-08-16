import axios from "axios";
import { React, useState } from "react";
import { Routes, Route, useNavigate, Link, Redirect } from "react-router-dom";

export function SignupForm(props) {
  const [state, setState] = useState({});
  const navigate = useNavigate(); //we use this hook to navigate to other page.
  function typeData(event) {
    // debugger;
    const name = event.target.name;
    const value = event.target.value;
    state[name] = value;
    setState(state);
  }

  function signup() {
    console.log("clicked");
    axios
      .post("https://jsonplaceholder.typicode.com/todos", state)
      .then((res) => {
        const resData = res.data;
       
        // if(resData.email=== "keerthi@gmail.com"){
        //     navigate("/DashBoard")
        // } else{
        //     navigate("/Redirect")
        // }
        navigate("/Redirect");
        setState(res.data);
        console.log(resData);
      });
  }

  return (
    <>
      <form>
          {/* <nav>
        <ul>
          <li>this is a user list</li>
          <li><button>

            Hi<Link to="/Redirect"></Link></button>
          </li>
          </ul>
     </nav> */}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={typeData}
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
            type="text"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={typeData}
          />
        </div>
        <div class="mb-3">
          <label for="PhoneNumber" class="form-label">
            PhoneNumber
          </label>
          <input
            type="text"
            name="PhoneNumber"
            class="form-control"
            id="exampleInputPassword1"
            onChange={typeData}
          />
        </div>

        <button type="button" class="btn btn-primary" onClick={signup}>
          Submit
        </button>
      </form>
    </>
  );
}
