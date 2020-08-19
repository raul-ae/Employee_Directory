import React from "react";
import "./style.css";

function Sort(props) {
  return (
    <div className="col">
      <div className="row">
   <button className="buttonDesc" onClick={() => props.sortEmployee()} >
     Sort Desc
   </button>
    </div>
    </div>
   );
}

export default Sort;