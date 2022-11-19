import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/globalStyles.css";

function Navbar() {
	return (
		<ul style={{ backgroundColor: "orange" }}>
			<NavLink
				to="/"
				className={(navData) => (navData.isActive ? "activeTab" : "")}
			>
				Home
			</NavLink>
			<NavLink
				to="about"
				className={(navData) => (navData.isActive ? "activeTab" : "")}
			>
				About
			</NavLink>
		</ul>
	);
}

export default Navbar;
