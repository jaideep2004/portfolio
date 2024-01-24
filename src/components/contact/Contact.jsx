import React from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {

	useEffect(() => {
		AOS.init();
	}, []);
	
	return (
		<div id='contact'  style={{
			backgroundImage: "url(./assets/b1.jpg)",
			
		}}>
			<div className='contactcontain'>
				<div className='contactleft'>
					<div className='contacthead'>
						<h2>Contact Me</h2>
					</div>

					<div className='conform'>
						<form action=''  data-aos="zoom-in-right" data-aos-duration='500'>
							<div id='conname'>
								<label htmlFor=''>Name</label>
								<input type='text' name='' id='' />
							</div>
							<div id='conmsg'>
								<label htmlFor=''>Message</label>
								<input type='text' name='' id='' />
							</div>
							<button>Send</button>
						</form>
					</div>
        </div>
        <div className="contactright">
          <div>
            <i class="fa-solid fa-user fa-xl"></i>
            <a href="https://drive.google.com/file/d/1O80fin5pzHsDHBHZ0OXJ8XUZJcATRQtl/view?usp=sharing ">Resume</a>
          </div>
          <div>
            <i class="fa-brands fa-github fa-2xl"></i>
            <a href=" https://github.com/jaideep2004">Github</a>
          </div>
          <div>
            <i class="fa-brands fa-linkedin fa-2xl"></i>
            <a href="https://www.linkedin.com/in/jaideep-2oo4/ ">Linkedin</a>
          </div>
          <div>
            <i class="fa-brands fa-instagram fa-2xl"></i>
            <a href=" https://www.instagram.com/jaisidhu2oo4">Instagram</a>
          </div>
        </div>
			</div>
			
		</div>
	);
}
