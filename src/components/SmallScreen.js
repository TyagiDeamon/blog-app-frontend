import React, { useState } from "react";
import axios from "axios";

function SmallScreen() {
	const [query, setQuery] = useState({
		author: "",
		title: "",
		content: "",
	});

	const submitQuery = async () => {
		// console.log(query);
		if (query.author === "" || query.title === "" || query.content === "") {
			return;
		}
		axios
			.post("https://blogbuddy.herokuapp.com/posts", query)
			.then(() => window.location.reload());
	};

	return (
		<div className="bg-[#2c2c61] border-orange-500 text-gray-100 border-2 h-[80%] w-[90%] rounded-md md:rounded-t-md shadow-lg py-2">
			<div className="text-center text-xl font-extrabold">Write a blog</div>
			<div className="mt-4">
				<form className="flex flex-col px-16 gap-4">
					<input
						placeholder="Author Name"
						className="rounded-md p-4 caret-red-500 shadow-md shadow-rose-500"
						value={query.author}
						onChange={(event) =>
							setQuery({ ...query, author: event.target.value })
						}
					/>
					<input
						placeholder="Title"
						className="rounded-md p-4 caret-red-500 shadow-md shadow-green-500"
						value={query.title}
						onChange={(event) =>
							setQuery({ ...query, title: event.target.value })
						}
					/>
					<textarea
						rows="8"
						placeholder="Your blog"
						className="rounded-md p-4 caret-red-500 resize-y shadow-md shadow-cyan-500"
						value={query.content}
						onChange={(event) =>
							setQuery({ ...query, content: event.target.value })
						}
					></textarea>

					<div
						className="bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-md w-min mx-auto px-4 py-2 mt-4 cursor-pointer hover:scale-105 transition shadow-md shadow-red-500/60"
						onClick={submitQuery}
					>
						Submit
					</div>
				</form>
			</div>
		</div>
	);
}

export default SmallScreen;
