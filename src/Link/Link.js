import { NavLink } from "react-router-dom";
import React from "react";
import './Link.css';

const Link = (props) =>{
    const {to} = props;

    return(
        <div>
            <NavLink to={to} className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""}>
                     Home
            </NavLink>
        </div>
    )
}

export default Link