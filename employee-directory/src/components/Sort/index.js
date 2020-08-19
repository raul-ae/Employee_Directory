import React from "react";
// import "./style.css";

function Sort(props) {
  return (
    <div>

   <button className="buttonDesc" onClick={() => props.sortEmployee()} >
     Sort Desc
   </button>
    </div>
   );
}

export default Sort;