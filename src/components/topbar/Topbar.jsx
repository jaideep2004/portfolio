import React from "react";
import "./topbar.css";

export default function Topbar() {
	return (
		<div className='topbar'>
			<div className='logocontainer'>
                <div className='logo'>
                    J
                </div>
			</div>

			<div className='linkscontainer'>
				<div className="btncontain">
				<div className="navbuttons">
					<a href='#home'>HOME</a>
					</div>
				</div>
				<div className="btncontain">
				<div className="navbuttons">
						<a href='#about'>ABOUT</a>
					</div>
				</div>
				
				
				<div className="btncontain">
				<div className="navbuttons">
						<a href='#project1'>PROJECTS</a>
					</div>
				</div>
				<div className="btncontain">
				<div className="navbuttons">
						<a href='#contact'>CONTACT</a>
					</div>
				</div>
				
					
				
			</div>
		</div>
	);
}
