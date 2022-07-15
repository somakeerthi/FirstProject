import React from 'react'

function Tick() {
    

    return (
        <>
       <div class="container-fluid">
           <div class="row">
            <div class="col-2">
                <h5>Tick-1</h5>
          
          <form>
            <div class="form-group">
                <input type="text" class="register1"/>
            </div><br/>
            <h5>Tick-2</h5>
            <div class="form-group" style={{marginTop:"5px"}}>
              <input type="text" class="register1" />
            </div><br/>
            <h5>Tick-3</h5>
            <div class="form-group" style={{marginTop:"5px"}}>
              <input type="text" class="register1" />
            </div>
            </form>
         </div>


         <div class="col-10">
          <h1>Tick1</h1>

              <form>
                <div class="form-group">
                    <input type="text" class="register"/>
                </div>
                <div class="form-group" style={{marginTop:"3px"}}>
                  <input type="text" class="register" />
                </div>
                <div class="form-group" style={{marginTop:"3px"}}>
                  <input type="text" class="register" />
                </div>
                </form><br/>

                <h5>Requirements</h5>
              <form>
                <div class="form-group">
                    <input type="text" class="register"/>
                </div>
                <div class="form-group" style={{marginTop:"3px"}}>
                  <input type="text" class="register" />
                </div>
                <div class="form-group" style={{marginTop:"3px"}}>
                  <input type="text" class="register" />
                </div>
                </form><br/>
                <h5>Description</h5>
              <form>
                <div class="form-group">
                    <input type="text" class="register"/>
                </div>
                <div class="form-group" style={{marginTop:"3px"}}>
                  <input type="text" class="register" />
                </div>
                <div class="form-group" style={{marginTop:"3px"}}>
                  <input type="text" class="register" />
                </div>
                </form><br/>
                <h5>Comments</h5>
              <form>
                <div class="form-group">
                    <input type="text" class="register"/>
                </div>
                <div class="form-group" style={{marginTop:"3px"}}>
                  <input type="text" class="register" />
                </div>
                <div class="form-group" style={{marginTop:"3px"}}>
                  <input type="text" class="register" />
                </div>
                </form>
              </div>  
         </div>
      </div>
      <div class="container-fluid" style={{ marginTop: "40px" }}>
        <div class="row">
          <p class="col-md-4">
          <i class='far fa-copyright' style={{fontSize:"15px"}}></i> 2020 Colby Fayock</p>
          <p class="col-md-4" style={{ textAlign: "center", textDecoration:"underline" }}>
            #50reactprojects
          </p>
          <p class="col-md-4" style={{ textAlign: "center" }}>
          <i class='fas fa-briefcase' style={{fontSize:"20px", color:"black"}}></i>46
          </p>
        </div>
      </div>
          
        </>
    )
}
export  default Tick;