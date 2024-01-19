import React from "react";
import "./contact.css";

export default function Contact() {
	return (
		<div id='contact'>
			<div className='contactcontain'>
				<div className='contactleft'>
					<div className='contacthead'>
						<h2>Contact Me</h2>
					</div>

					<div className='conform'>
						<form action='' >
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
            <a href=" ">Resume</a>
          </div>
          <div>
            <i class="fa-brands fa-github fa-2xl"></i>
            <a href=" ">Github</a>
          </div>
          <div>
            <i class="fa-brands fa-linkedin fa-2xl"></i>
            <a href=" ">Linkedin</a>
          </div>
          <div>
            <i class="fa-brands fa-instagram fa-2xl"></i>
            <a href=" ">Instagram</a>
          </div>
        </div>
			</div>
		</div>
	);
}
