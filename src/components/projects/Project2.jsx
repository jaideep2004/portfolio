import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project2 = () => {

	useEffect(() => {
		AOS.init();
	}, []);

    return (
        <div id='project2'>
            <div className='project2contain'>
				<div className='leftcontain2'>
					<div className='projectdesc2'>
						Wordpress Website built using Elementor, Colibri Page Builder with
						the integration of WPFormsLite.
					</div>
					<div className='viewbtn'>
						<a href='https://gunaventerprises.com/'>View</a>
					</div>
				</div>
				<div className='rightcontain2'>
					<div className='projimg2' data-aos="flip-right" data-aos-duration='500'>
						<img src='./assets/p5.png' alt='' />
					</div>
				</div>
			</div>
        </div>
    );
}

export default Project2;
