import React from "react";
import "./style.css";

function Sort(props) {
  return (
   <button className="buttonDesc" onClick={() => props.sortEmployee()} >
     Sort Desc
   </button>
   );
}

export default Sort;