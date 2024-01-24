import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project3 = () => {

    useEffect(() => {
		AOS.init();
    }, []);
    
    return (
        <div id='project3'  style={{
			backgroundImage: "url(./assets/b1.jpg)",
			
		}}>
             <div className='project2contain'>
				<div className='leftcontain3'>
                <div className='projimg2'  data-aos="flip-left" data-aos-duration='500'>
							<img src='./assets/p6.png' alt='' />
						</div>
					
				</div>
                <div className='rightcontain3'>
                    <div className="projectdesc3">
                    Responsive Bootstrap5 Website with the integration of MUI and FontAwesome Icons
                    </div>
					<div className='viewbtn'>
						<a href='https://jaideep2004.github.io/'>View</a>
					</div>
				</div>
			</div>
        </div>
    );
}

export default Project3;
