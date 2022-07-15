import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import axios from "axios";
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!"
  },
  number: {
    range: "${label} must be between ${min} and ${max}"
  }
};
/* eslint-enable no-template-curly-in-string */

// use state is nothing state
// {}

const Forms = () => {
  const [value, setValues] = useState("");

//userEffect
//useReducer
//useHook
//useContext
  let [userDetails, updateUserDetails] = useState({  
    username: 'Sushanth',
    password: '12345',
    description: ''
  });


  // let userDetails = {
  //   username: '',
  //   password: '',
  //   description: ''
  // }

  let search = (e) => {
    e.preventDefault();
    let keyword = e.target.elements.keyword.value;
    console.log('Keyword: ' + keyword);
  }

  let handleChange = (e) => {
    debugger
    let name = e.target.name;  //userDetails {}
    let value = e.target.value;  // susanth pass 123456   {update values}
    userDetails[name] = value;
    updateUserDetails(userDetails);
  }

// 4 types 
// get there is no parameters just we have to share url
// post url , userDetails
// put user, url , userDetails, updateuserDetails
// delete url, userDetails


  let getUserDetails = (e) => {
    e.preventDefault();
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
    })
  }

  let save = (e) => {
    debugger
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts", userDetails).then((response) => {
      console.log(response);
    })
  }



//   let deleteUser= (e) => {
//     e.preventDefault();
//     axios.delete("https://jsonplaceholder.typicode.com/posts", userDetails).then((response) => {
//       console.log(response);
//     })

//   }
  const inputValues = (event) => {
    setValues(event.target.value);
    alert(value);
  };
  const OnSubmitInputValues = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", userDetails).then((response) => {
      console.log(response);
    })
    
  };


  return (
    <>
      {/* <lable>username</lable>
      <input
        type="text"
        placeholder="Enter your username"
        onChange={inputValues} ///keerthi
      />

      <label>Passwpord</label>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={inputValues}
      />
      <button type="submit" onClick={OnSubmitInputValues()}>
        Submit
      </button> */}
    <div>

      <fieldset>
        <legend>Demo 2</legend>
        <form method="post" onSubmit={save}>
          Username
           <input type="text" name="username" onChange={handleChange} />
          <br />
          Password <input type="password" name="password" onChange={handleChange} />
          <br />
          Description
          <br />
          <textarea name="description" cols="20" rows="5" onChange={handleChange}></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </fieldset>
    </div>
    </>
  );
};

export default Forms;
