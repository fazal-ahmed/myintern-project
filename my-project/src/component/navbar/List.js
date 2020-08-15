import React from "react"
import { NavLink } from 'react-router-dom';

function List(props) {
  return (

    <li class="nav-item active">
      {<NavLink to={props.name === "SELL"?"Other" : props.name === "FINANCE"? "Other": "/"}><a class="nav-link hov"><h6 className="listitem">{props.name}</h6><span class="sr-only">(current)</span></a></NavLink>}
    </li>
  )
}
export default List;