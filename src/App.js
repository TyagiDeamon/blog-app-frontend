import { useState } from "react";
import "./index.css";
import Header from "./components/Header.js";
import CreateBlog from "./components/CreateBlog.js";
import AllBlogs from "./components/AllBlogs";
import Slide from "@mui/material/Slide";

function App() {
	const [showSlider, setShowSlider] = useState(false);
	return (
		<div className="min-h-screen flex flex-col bg-gray-200">
			<Header />
			<div className={`${showSlider ? "hidden" : "flex"} flex-1`}>
				<AllBlogs />
			</div>
			<div
				className={`${
					showSlider ? "bg-red-500" : "bg-green-600"
				} text-white fixed left-0 top-1/2 p-4 rounded-r-md cursor-pointer z-50 select-none font-semibold text-lg shadow-md`}
				onClick={() => setShowSlider(!showSlider)}
			>
				{showSlider ? "<-" : "->"}
			</div>
			<Slide
				direction="right"
				in={showSlider}
				mountOnEnter
				unmountOnExit
				className="flex items-center h-screen z-40"
			>
				<div className="fixed left-0 p-4 rounded-r-md my-auto">
					<CreateBlog />
				</div>
			</Slide>
		</div>
	);
}

export default App;
