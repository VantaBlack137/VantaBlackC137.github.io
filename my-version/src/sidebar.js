import React, { useState } from "react";
import "./sidebar.css";

function Sidebar(props) {
  

  return (
    <div id = "main">
      <div id="sidebar-div">
      
      {props.children}
    </div>
    <div id = "lectie"></div>
    </div>
  );
}

export { Sidebar };
