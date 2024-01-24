import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import "./home.css";
import Monitor from "./Monitor";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);

	//delay type animation
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 1500);
	}, []);

	return (
		<div id='home' className='bg' style={{
			// backgroundImage: "url(./assets/b1.jpg)",
			
		}}>
			{/* small circle animation */}
			<div className='background'>
				<div className='circle1'></div>
				<div className='circle2'></div>
				<div className='circle3'></div>
				<div className='circle4'></div>
				<div className='circle5'></div>
				<div className='circle6'></div>
			</div>

			<div className='hero'>
				<div className='name' data-aos='fade-right' data-aos-duration='500'>
					
						<div className='typeanimation'>
							JAIDEEP SINGH
							
						</div>
					
					<div id='name1'>
					{loading && (
						<div  data-aos='fade-right' data-aos-duration='500'>
							<TypeAnimation
							
								cursor={false}
									sequence={[
										'Student || Front-End Developer'
								]}
									speed={5}
									
							/>
						</div>
					)}
						{/* <div>Student || Front-End Developer</div> */}
					</div>
				</div>

				<div className='heroimage' data-aos='zoom-in' data-aos-duration='400'>
					<Monitor />
				</div>
			</div>
		</div>
	);
}
