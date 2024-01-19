import React from "react";
import "./skills.css";



const Skills = () => {
	

	return (
		<div id='skills'>
			<div className='skillcontain'>
				<div className='skillsdesc'>
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
				
				<div className='skillcontain2'>
					<div className="skillhead">

						<h2>Skills</h2>
					</div>
                    <div className="pchart"> 
                       <div className="pchart3"></div>
						<div className="pchart2" >
							<div>Frontend</div>
							<div>Backend</div>
					   </div>
						
					</div>
				</div>
			</div>
			 
		</div>
	);
};

export default Skills;
