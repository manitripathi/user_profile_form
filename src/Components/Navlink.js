import React from "react";
import { Link } from "react-router-dom";

function Navlink() {
  const link = [
    { id: 1, name: "Home",icon:<i className="fa fa-home"></i>, path: "/" },
    { id: 2, name: "Inbox",icon:<i className="fa fa-image"></i>, path: "inbox" },
  ];

  return (
      <nav className="navbar navbar-expand-sm justify-content-left ml-3">
        <ul className="navbar-nav">
        {link.map((item)=>{
                return(
                    <li key={item.id}>
                        <Link to={item.path}>
                            <div>
                                <div className="link_icon"> {item.icon} </div>
                                <div className="link_name"> {item.name} </div>
                            </div>
                        </Link>
                    </li>
                )
            })} 
       
        </ul>
      </nav>
  );
}

export default Navlink;
