import React from 'react'
import {
  NavLink
} from "react-router-dom";

const Nav = () => {

	return(
		<div className="container-fluid p-0 d-flex justify-content-between">

			<div className="mx-5 pr-4 my-0 py-3">
				<i className="fa fa-circle mr-1 text-turquoise em-1p2"></i> LOGO
			</div>
			<div className="d-flex my-0">
				<div className="mx-5 em-1p2 py-3">
					<NavLink className="py-3" activeClassName="nav-active" to="/dashboard">Dashboard</NavLink>
				</div>
				<div className="mx-5 em-1p2 py-3">
					<NavLink className="py-3" activeClassName="nav-active" to="/expert">FindExpert</NavLink>
				</div>
				<div className="mx-5 em-1p2 py-3">
					<NavLink className="py-3" activeClassName="nav-active" to="/discussion">Discussion</NavLink>
				</div>
			</div>
			<div className="mx-4 my-3">
				<i className="fa fa-bell-o text-orange em-1p2 mx-2"></i>
				<i className="fa fa-comment-o text-orange em-1p2 mx-2"></i>
				<img className="rounded-circle mx-2" src="https://picsum.photos/id/37/300/300" height="30px" />
				<i className="fa fa-angle-down text-orange em-1p2 mx-2"></i>
			</div>

			 
		</div>
		)
}

export default Nav
/*
<h3><Link to="/dashboard">Dashboard</Link> | <NavLink to="/expert">FindExpert</NavLink> | <Link to="/dashboard">Discussion</Link> </h3>
*/