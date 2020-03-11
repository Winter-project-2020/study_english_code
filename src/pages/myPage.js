import React, { useState, useEffect } from 'react';
import back from '../images/back.png';
import userImg from '../images/user.png';
import score from '../images/score.png';
import test from '../images/test.png';
import crown from '../images/crown.png';
import '../Sass/myPage.scss';


import { 
	Row,
	Col, 
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Media,

} from 'reactstrap';





const myPage = (props) => {

	const hoverColor = {
		backgroundColor: '#BDBDBD',	
	}	
	return (
		<div>
			<Navbar color="light" light expand="md">
				<img 
					src={back}
					alt="back"
					width="20px" 
					style={{ marginRight: '10px', marginLeft: '10px' }} 	
				/>
			

				<NavbarBrand 
					href="/">Study Opic!
				</NavbarBrand>	
			</Navbar>		


			{/* Sidebar  */}

			<div>
				<div className="mypage">
					<div className="myPage-sidebar float--left">
					 	<ul className="sidebar-nav">
							<li><a><img src={userImg} width='35'/> Edit Profile</a></li>
							<li><a><img src={test} width='35' /> schedule</a></li>
							<li><a><img src={crown} width='35'/> Record achievement</a></li>
						</ul>
					</div>

						<div className="setting-page">
							<h2><img src={userImg} width='35'/> Edit Profile</h2>
						</div>	
					
					</div>
				</div>	

			{/* <Nav vertical tabs className="myPage--box">
				<NavItem className="navi">
					<NavLink href="#"><img src={userImg} width='35'/> Edit Profile</NavLink> 
				</NavItem>
				<NavItem className="navi">
					<NavLink href="#"><img src={test} width='35' /> schedule</NavLink> 
				</NavItem>
				<NavItem className="navi">
					<NavLink href="#"><img src={crown} width='35'/> Record achievement</NavLink> 
				</NavItem>
			</Nav> */}
			

		

		

		</div>

	);
}

export default myPage;