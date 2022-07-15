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
  const [value, setValues] = useState("shiva");

  const inputValues = (event) => {
    setValues(event.target.value); //keerthi {keerthi}
    // alert(value);
  };
  const OnSubmitInputValues = () => {
      debugger
    axios.post("https://jsonplaceholder.typicode.com/posts",value).then((response) => {
      console.log(response);
    })
}


  return (
    <>
     <Form onSubmit={OnSubmitInputValues}>
      <lable>username</lable>
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
      </button>
      </Form>
    </>
  );
};

export default Forms;
