import React from "react";
import "./topbar.css";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Topbar() {
	useEffect(() => {
		AOS.init();
	}, []);

	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const [isIconVisible, setIsIconVisible] = useState(false);

	const toggleIcon = () => {
		setIsIconVisible(!isIconVisible);
	};

	const handleButtonClick = () => {
		toggleVisibility();
		toggleIcon();
		// Add any other functions you want to call here
	};

	const handleLinkClick = () => {
		// Close the menu when a link is clicked
		setIsVisible(false);
		setIsIconVisible(false);
	};

	return (
		<div className='topbar'>
			<div className='logocontainer'>
				<div className='logo'>J</div>
			</div>

			<div id="mcross">
				<div></div>
				<div></div>
			</div>
			{/* mobile menu icon */}
			<div onClick={handleButtonClick}>
				{/* <i id='mobilemenuicon' class='fa-solid fa-bars fa-xl' ></i> */}
				{isIconVisible ? (
					<i
						id='mmenu2'
						class='fa-solid fa-circle-xmark fa-2xl'
						data-aos='zoom-in'></i>
				) : (
					<div id='mmenu' data-aos='zoom-out'>
						<div></div>
						<div></div>
						<div></div>
					</div>
				)}
			</div>

			{isVisible && (
				<div className='mobilemenu'>
					<a href='#home' id='mo1' data-aos='zoom-in-down' data-aos-duration='500' onClick={handleLinkClick}>
						<div className='optcontain0' >
							HOME
						</div>
					</a>
					<a href='#about' id='mo1' data-aos='zoom-in-down' data-aos-duration='500' onClick={handleLinkClick}>
						<div className='optcontain0' >
							ABOUT
						</div>
					</a>
					<a href='#project1' id='mo1' data-aos='zoom-in-down' data-aos-duration='500' onClick={handleLinkClick}>
						<div className='optcontain0' >
							PROJECTS
						</div>
					</a>
					<a href='#contact' id='mo1' data-aos='zoom-in-down' data-aos-duration='500' onClick={handleLinkClick}>
						<div className='optcontain0' >
							CONTACT
						</div>
					</a>
					{/* <div
						className='optcontain1'
						onClick={handleLinkClick}
						data-aos='zoom-in'
						data-aos-duration='500'>
						<a href='#home'>HOME</a>
					</div>

					<div
						className='optcontain2'
						onClick={handleLinkClick}
						data-aos='zoom-in'
						data-aos-duration='500'>
						<a href='#about'>ABOUT</a>
					</div>
					<div
						className='optcontain3'
						onClick={handleLinkClick}
						data-aos='zoom-in'
						data-aos-duration='500'>
						<a href='#project1'>PROJECTS</a>
					</div>
					<div
						className='optcontain4'
						onClick={handleLinkClick}
						data-aos='zoom-in'
						data-aos-duration='500'>
						<a href='#contact'>CONTACT</a>
					</div> */}
				</div>
			)}

			{/* laptop */}
			<div className='linkscontainer'>
				<div className='btncontain'>
					<div className='navbuttons'>
						<a href='#home'>HOME</a>
					</div>
				</div>
				<div className='btncontain'>
					<div className='navbuttons'>
						<a href='#about'>ABOUT</a>
					</div>
				</div>

				<div className='btncontain'>
					<div className='navbuttons'>
						<a href='#project1'>PROJECTS</a>
					</div>
				</div>
				<div className='btncontain'>
					<div className='navbuttons'>
						<a href='#contact'>CONTACT</a>
					</div>
				</div>
			</div>
		</div>
	);
}
