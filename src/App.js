import "./App.css";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";

import About from "./components/about/About";
import Topbar from "./components/topbar/Topbar";
import LoadingScreen from "./components/loadingscreen/LoadingScreen";
import { useState, useEffect } from "react";
import "./components/home/home.css";
import Skills from "./components/skills/Skills";
import Project1 from "./components/projects/Project1";
import Project3 from "./components/projects/Project3";
import Project2 from "./components/projects/Project2";
import Footer from "./components/footer/Footer";



function App() {

	
	

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3700);
	}, []);

	return (
		<div className='App'>
			{loading ? (
				<LoadingScreen />
			) : (
				
				<main className='maincontain'>
					<Topbar />
					<Home />
					<About />
					<Skills />
					<Project1 />
					<Project2 />
					<Project3 />
					<Contact />
					<Footer />
				</main>
			)}
{/* <Topbar />
			<main
				className='maincontain' >
				
				<Home />
				<About />
				<Skills />
				<Project1 />
				<Project2 />
				<Project3 />
				<Contact />
				<Footer/>
			</main> */}


		</div>
	);
}

export default App;
