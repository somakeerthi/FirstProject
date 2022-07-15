import axios from "axios";
import React,{useState,useEffect} from "react";

function Ecommerce() {
  const [userDetails,setName] = useState({}) 
  const[section,setSection] = useState({})
  const[data,setData] = useState({})
  const[getPostData,setPostData] = useState({})

  const handleChange = (event) => {
    // debugger;
    const name = event.target.name;
    const value = event.target.value; 
    userDetails[name] = value;
    setName(userDetails);
    
  }
  const handleChange1 = (event) => {
    // debugger;
    const name = event.target.name;
    const value = event.target.value; 
    section[name] = value;
    setSection(section);
    
  }
  const handleChange2 = (event) => {
    // debugger;
    const name = event.target.name;
    const value = event.target.value; 
    data[name] = value;
    setData(data);
    
  }
  // const submit = async() => {
  //   debugger;
  //   console.log("clicked");
  //   await axios.post("https://jsonplaceholder.typicode.com/todos",{userDetails,section,data})
  // }
  const get = () => {
    
    const response  = axios
    .get("https://gorest.co.in/public/v2/users")
    .then((response) => setPostData(response.data));
  console.log(data);
  }
  useEffect(() => {
   get(); 
  }, [])
  if(getPostData.length > 0){
    {getPostData.map((data) => {
      return <h1>{data.name}</h1>;
    })}
  }
  else{
    console.log("No data found");
  }
  return (
    <>
    
    
      <div class="container-fluid">
        <div class="row">
            
          <div id="col-sm-6" class="box"></div>
          <div class = "col-sm-6">
              <h3>Game Name</h3>
              <form>
                <div class="form-group">
                    <input type="text" class="form" name ="name" onChange={handleChange} />
                </div>
                <div class="form-group">
                  <input type="text"  class="form" name = "location"  onChange={handleChange} />
                </div>
                <div class="form-group">
                  <input type="text" class="form" name = "address"  onChange={handleChange} />
                </div>
                {/* <button type="button" class="btn btn-primary" onClick={buyNow}>Buy Now</button> */}
                </form>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <h6>More Details</h6>
              <form>
                <div class="form-group">
                    <input type="text" class="form" name ="state" onChange={handleChange1}  />
                </div>
                <div class="form-group">
                  <input type="text" class="form" name ="country" onChange={handleChange1}   />
                </div>
                <div class="form-group">
                  <input type="text" class="form" name ="zip" onChange={handleChange1}  />
                </div>
                </form>
      </div>
      <div class="container-fluid">
        <h6>Reviews</h6>
              <form>
                <div class="form-group">
                    <input type="text" class="form" name ="email" onChange={handleChange2} />
                </div>
                <div class="form-group">
                  <input type="text" class="form" name ="password"  onChange={handleChange2}   />
                </div>
                <div class="form-group">
                  <input type="text" class="form" name ="create"  onChange={handleChange2}  />
                </div>
                {/* <button type="button" class="btn btn-primary" onClick={submit}>Submit</button> */}
                </form>
      </div>
      <div class="container-fluid" style={{ marginTop: "10px" }}>
        <div class="row">
          <p class="col-md-4"> 
          <i class='far fa-copyright' style={{fontSize:"15px"}}></i>2020 Colby Fayock</p>
          <p class="col-md-4" style={{ textAlign: "center", textDecoration:"underline" }}>
            #50reactprojects
          </p>
          <p class="col-md-4" style={{ textAlign: "center" }}>
          <i class='fas fa-briefcase' style={{fontSize:"20px", color:"black"}}></i>
            14
          </p>
        </div>
      </div>
    </>
  );
}
export default Ecommerce;
