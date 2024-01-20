import React from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
	
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id='about'>
			<div className='aboutcontainer' >
				<div className='profileimage'
					data-aos='fade-right'
					data-aos-duration='500'>
					<div className='abouthead'>
						<h2>About Me</h2>
					</div>
					<div className='imagecontain'>
						<img src='./assets/bg5.jpg' alt='' />
					</div>
				</div>

				<div className='aboutsection' >
					<div className='aboutdesc' data-aos='zoom-in'
					data-aos-duration='500'>
						<p>
							Hi! I am Jaideep Singh. I am a 2nd year student of B.Voc. Software
							Development at Khalsa College, Patiala . From my childhood, I was
							fascinated by Computers & Technology. I was drawn to Web
							Development because of its dynamic nature and the endless
							possibilities it offers.
							<br />I have hands-on experience with Front-end technologies and
							I'm excited to continue expanding my skills in Back-end
							development.
						</p>
						
					</div>
				</div>

			</div>
		</div>
	);
}
