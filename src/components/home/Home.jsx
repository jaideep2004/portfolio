import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import "./home.css";
import Monitor from "./Monitor";

export default function Home() {
	//delay type animation
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 2000);
	}, []);

	const [textColor, setTextColor] = useState("white");

	return (
		<div
			id='home'
			className='bg'>
			<div className="background">
				<div className="circle1"></div>
				<div className="circle2"></div>
				<div className="circle3"></div>
				<div className="circle4"></div>
				<div className="circle5"></div>
				<div className="circle6"></div>
				
			</div>
			<div className='hero'>
			
				<div className='name' style={{ fontSize: "40px", color: textColor }}>
					{loading && (
						<div className='typeanimation'>
							<TypeAnimation
								cursor={false}
								sequence={[
									"JAIDEEP SINGH",
									() => setTextColor("cyan"),
								]}
								speed={10}
							/>
						</div>
					)}
					<div id="name1">
						<div>Student</div>
						<div>Front-End Developer</div>
					</div>
				</div>

				<div className='heroimage'>
					<Monitor/>
					
				</div>
			</div>
		</div>
	);
}
