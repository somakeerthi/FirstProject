import React from "react";
import { Charts } from "./Charts";

function ParentChart() {
  return (
    <>
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="row linechartcss">
            <div class="col"><Charts /></div>
          </div>

          <div class="row">
          
            <div class="col-4 colcss">stat
            </div>
            
            <div class="col-4 colcss">stat
            </div>
           
            <div
              class="col-4 colcss">stat
             </div>
           
          </div>
          <div class="row" style={{ marginTop: "10px" }}>
            <div class="col-6 thirdbox">Pie chart</div>
            <div class="col-6 thirdbox">Line chart</div>
          </div>
          <div class="row">
            <div class="col-4 colcss">stat
             
            </div>
            <div class="col-4 colcss">stat
             
            </div>
            <div class="col-4 colcss">stat
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ParentChart;
