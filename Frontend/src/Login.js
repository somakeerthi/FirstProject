import axios from 'axios';
import React,{useState} from 'react'

export function Login(props) {
    const[value,setValues] = useState({})
    const inputValues = (event) => {
        debugger;
        const name = event.target.name
        const iValues = event.target.value
        debugger;
        setValues(previousStateValue => ({
          
          ...previousStateValue,[name]:iValues
          
        })

        )
        console.log("value",value)
    };
   
    function Submit() {
        debugger
            axios.post("https://jsonplaceholder.typicode.com/posts",value).then((response) => {
                console.log(response);
              });

            }


    return (
        <>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={inputValues} />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={inputValues} />
  </div>
  

    <button type='button' onClick={Submit}>Login </button> 
    </form> 
        </>
    )
    }
