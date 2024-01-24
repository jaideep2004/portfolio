import React from "react";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project1() {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id='project1' >
			<div className='project1contain'>
				<div className='leftcontain1'>
					<div className='projecthead'>
						<h2>Projects</h2>
					</div>
						<div className='projimg'  data-aos="flip-left" data-aos-duration='500'>
							<img src='./assets/p4.png' alt='' />
						</div>
					
				</div>

				<div className='rightcontain1'>
					<div className='projectdesc1'>
						Responsive Education Website built using ReactJS, NodeJS, Express &
						MongoDB
					</div>
					<div className='viewbtn'>
						<a href='https://codingarena.onrender.com/'>View</a>
					</div>
				</div>
			</div>

			
		</div>
	);
}
