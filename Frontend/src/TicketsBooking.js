import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
import axios from "axios";
import { Checkbox } from "antd";

const companies = [
  { id: 1, name: "Hyd" },
  { id: 2, name: "Banglore" },
  { id: 3, name: "Chennai" },
  { id: 4, name: "Mumbai" },
  { id: 5, name: "Kolkatta" },
  { id: 6, name: "Delhi" },
  { id: 7, name: "Goa" },
];

const lowerCasedCompanies = companies.map((company) => {
  return {
    id: company.id,
    name: company.name.toLowerCase(),
  };
});

const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
};
const TicketsBooking = (props) => {
  debugger;

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dateValue, setDateValue] = useState(null);
  const [disability,setDisability] = useState(false)

  function Booking() {
    debugger;
    const payload = {
        value,
        dateValue,
        disability
    }
    axios
      .post("https://jsonplaceholder.typicode.com/posts", payload)
      .then((res) => {
        console.log(res);
      });
  }

  function getSuggestions(value) {
    return lowerCasedCompanies.filter((company) =>
      company.name.includes(value.trim().toLowerCase())
    );
  }
  function handleDateUpdate(e) {
    const dateValue = e.target.value;
    console.log("dateValue", dateValue);
    setDateValue(dateValue);
  }

  const handleChangeData =(e) =>{
    //   debugger;
    const personWithDisabilityValue = e.target.value;
    // setDateValue(dateValue);
    // setDisability(personWithDisabilityValue);
  if(personWithDisabilityValue ==="Personwithdisabilityconcection"){
    setDisability(true)
  }
  else {
    setDisability(false)
  }
  }
  
  return (
   
    <React.Fragment>
     
    <div className="image">

      <h3>Book Tickets</h3>
      <div className="row"> 
      
        <div className="col-6">
          <AutoSuggest
          
            suggestions={suggestions}
            onSuggestionsClearRequested={() => setSuggestions([])}
            onSuggestionsFetchRequested={({ value }) => {
              console.log(value);
              setValue(value);
              setSuggestions(getSuggestions(value));
            }}
            onSuggestionSelected={(_, { suggestionValue }) =>
              console.log("Selected: " + suggestionValue)
            }
            getSuggestionValue={(suggestion) => suggestion.name}
            renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
            inputProps={{
              placeholder: "Type 'c'",
              value: value,
              onChange: (_, { newValue, method }) => {
                setValue(newValue);
              },
            }}
            highlightFirstSuggestion={true}
          />
        </div>
        <div className="col-6">
          <input type = 'date' onChange={handleDateUpdate} />
        </div>
      </div>

      <div className="row" style={{"marginTop":"s20px"}}>

          <div className="col-md-6">
              <input type="checkbox" value = "Personwithdisabilityconcection" onChange={handleChangeData}/> Person with disability concection
          </div>
          <div className="col-md-6">
              <input type="checkbox" /> Flexible with Date
          </div>
      </div>
      <div className="row" style={{"marginTop":"s20px"}}>

          <div className="col-md-6">
              <input type="checkbox" onChange={handleChangeData}/> Train with Available Berth
          </div>
          <div className="col-md-6">
              <input type="checkbox" /> Railway pass conccesion
          </div>
      </div>

      <button type="button" className="btn btn-primary" onClick={Booking}>
        Book
      </button>
      </div>
    </React.Fragment>
  );
};

export default TicketsBooking;
