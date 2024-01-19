import React from "react";
import { useState, useEffect } from "react";
import "./loadingscreen.css";

const LoadingScreen = () => {
	return (
		<div className='animatecontain'>
			<div className='ringcontain'>
				<div className='ringN'>
					<div className='ring2'>J</div>
				</div>
				<div className='ringA'>
					<div className='ring1'></div>
				</div>
				<div className='ringB'>
					<div className='ring1'></div>
				</div>
				<div className='ringC'>
					<div className='ring1'></div>
				</div>
				<div className='ringD'>
					<div className='ring1'></div>
				</div>

				
			</div>
		</div>
	);
};

export default LoadingScreen;
