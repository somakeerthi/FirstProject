import axios from 'axios';
import React,{useState} from 'react'

export function CustomApi(url) { 
    const [users, updateState] = useState("keerthi");
    function submitForm(event) {
        // debugger;
        axios
          .get(url)
          .then(response => {
            console.log(response);
            updateState(response.data)
          });
      }

   return users
}
