// import React from 'react'

// function Sidebar() {


//   return (
//     <div>Sidebar</div>
//   )
// }

// export default Sidebar


import "./Style.css"
import React from "react";


import { SidebarData } from "./SidebarData.jsx";
import { Link } from  "react-router-dom"

function SideBar() {
  return (
    <nav className="sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id= {window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
               <Link to = {val.link} />
              {""}
              <div id="icon">{val.icon}</div>
              {""}
              <div id="title">{val.title}</div>
        
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;