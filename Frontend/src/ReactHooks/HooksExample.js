
import React, { useState } from "react";

export function HooksExample(props) {
  const [userDetails, updateUserDetails] = useState({"name":"keerthi","city" :"Hyd"});

  function handleChange(event) {
    debugger;
    const name = event.target.name;
    // {name="sushanth"}
    const value = event.target.value;
    userDetails[name] = value;
    // userDetails[name] = "sushanth"
    updateUserDetails(userDetails);
  }

  return (
    <>
    <label for="inputPassword4">Name</label>
              <input
                name="name"
                // value={userDetails.password}
                type="text"
                value ={userDetails.name}
                class="form-control"
                id="inputPassword4"
                placeholder="name"
                onChange={handleChange}
              />
              <label for="inputPassword4">City</label>
              <input
                name="city"
                // value={userDetails.password}
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="city"
                onChange={handleChange}
              />
      <button type="button" onClick={handleChange}>
        Get Data
      </button>
    </>
  );
}
