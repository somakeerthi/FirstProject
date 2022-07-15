import axios from "axios";
import React, { useState } from "react";

function PostData() {
  const [userDetails, updateUserDetails] = useState({"email":"keerthi","city" :"Hyd"});

  function handleChange(event) {
    debugger;
    const name = event.target.name;
    // {name="sushanth"}
    const value = event.target.value;
    userDetails[name] = value;
    // userDetails[name] = "sushanth"
    updateUserDetails(userDetails);
  }

  function submitForm(event) {
    // debugger;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", userDetails)
      .then(response => {
        console.log(response);
      });
  }
  return (
    <div class="container-fluid mt-9" style={{ marginTop: "30px" }}>
      <form onSubmit={submitForm}>
        <div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                name="email"
                // value={userDetails.email}
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                name="password"
                // value={userDetails.password}
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              name="address1"
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              name="address2"
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              onChange={handleChange}
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                name="city"
                type="text"
                class="form-control"
                id="inputCity"
                onChange={handleChange}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input
                name="zip"
                type="text"
                class="form-control"
                id="inputZip"
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="button" class="btn btn-primary" onClick={submitForm}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostData;

// form section =====> method handleChange
