import React from "react";
// import "./style.css";

function Filter(props) {
  return (
      <div className="col">
      <div className="row">
    <label>Filter by Department:</label>

    <select id="myFilter">
      <option value="Marketing">Marketing</option>
      <option value="Sales">Sales</option>
      <option value="Engineering">Engineering</option>
      <option value="Finance">Finance</option>
      <option value="CEO">CEO</option>
    </select>
    {/* {console.log(document.getElementById("myFilter").value)} */}
    <button className="filter" onClick={() => props.filterEmployee(document.getElementById("myFilter").value)} >
     Filter
   </button>
    </div>
    </div>
   );
}

export default Filter;