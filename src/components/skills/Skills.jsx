import React from "react";
import "./skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id='skills'  >
			<div className='skillcontain'>
				<div className='skillcontain2'>
					<div className='skillhead'>
						<h2>My Skills</h2>
					</div>
					<div className='pchart' data-aos='zoom-in-up' data-aos-duration='500'>
						<div className='pchart3'></div>
						<div className='pchart2'>
							<div>
								
								<i class='fa-solid fa-circle' style={{color:"cyan"}}></i>Frontend
							</div>
							<div>
								
								<i class='fa-solid fa-circle'  style={{color:"black"}}></i>Backend
							</div>
						</div>
					</div>
				</div>

				<div className='skillsdesc'>
					
					<div className='skillright' data-aos='zoom-in-up' data-aos-duration='500'>
						<div>HTML</div>
						<div>CSS</div>
						<div>JavaScript</div>
						<div>ReactJS</div>
						<div>NodeJS</div>
						<div>MySQL</div>
						<div>Python</div>
						<div>Git</div>
						<div>Wordpress</div>
						<div>Bootstrap/Tailwind CSS</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
