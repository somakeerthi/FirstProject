import React from "react";

function CssProject() {
  return (
    <div class="container-fluid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">Events</div>
          <button type="button" class="col-sm-2">
            Primary
          </button>
          <button type="button" class="col-sm-2">
            Secondary
          </button>
          <button type="button" class="col-sm-2">
            Success
          </button>
        </div>
      </div>
      <div class="dashboardCss" style={{ marginTop: "20px" }}>
        <div class="row">
        
          <div>
            <div>Test 1</div>
          </div>
          <div
            class="col"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <input type="text" />
              <br />
              <input type="text" style={{ marginTop: "10px" }} />
              <br />
              <button
                type="button"
                class="buttonCss"
                style={{ marginTop: "10px", width: "100%" }}
              >
                Buy A Ticket
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" style={{ marginTop: "10px" }}>
        <div class="row ">
          <div class="col-md-3 sp1 speakerCss">Speaker</div>
          <div class="col-md-3 sp2 speakerCss">Speaker</div>
          <div class="col-md-3 sp3 speakerCss">Speaker</div>
          <div class="col-md-3 sp4 speakerCss">Speaker</div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 sp1 speakerCss">Speaker 6</div>
          <div class="col-md-3 sp2 speakerCss">Speaker 7</div>
          <div class="col-md-3 sp3 speakerCss">Speaker 8</div>
          <div class="col-md-3 sp4 speakerCss">Speaker 9</div>
        </div>
      </div>

      <div class="container-fluid" style={{ marginTop: "10px" }}>
        <div class="row">
          <p class="col-md-4"> 
          <i class='far fa-copyright' style={{fontSize:"15px"}}></i>2020 Colby Fayock</p>
          <p class="col-md-4" style={{ textAlign: "center" }}>
            #50reactprojects
          </p>
          <p class="col-md-4" style={{ textAlign: "center" }}>
          <i class='fas fa-briefcase' style={{fontSize:"20px", color:"black"}}></i>
            12
          </p>
        </div>
      </div>
    </div>
  );
}

export default CssProject;
