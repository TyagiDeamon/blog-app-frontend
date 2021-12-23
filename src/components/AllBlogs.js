import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Blog from "./Blog.js";

function AllBlogs() {
	const [blogList, setBlogList] = useState([]);
	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		axios.get("https://blogbuddy.herokuapp.com/posts").then((res) => {
			setBlogList(res.data);
			setShowLoader(false);
		});
	}, []);
	return (
		<div className="flex-1 bg-white flex flex-col gap-4 py-2 overflow-auto rounded-t-md">
			{showLoader && (
				<div class="shadow rounded-md p-4 max-w-sm w-full mx-auto">
					<div class="animate-pulse flex space-x-4">
						<div class="rounded-full bg-gray-500 h-10 w-10"></div>
						<div class="flex-1 space-y-6 py-1">
							<div class="h-2 bg-gray-500 rounded"></div>
							<div class="space-y-3">
								<div class="grid grid-cols-3 gap-4">
									<div class="h-2 bg-gray-500 rounded col-span-2"></div>
									<div class="h-2 bg-gray-500 rounded col-span-1"></div>
								</div>
								<div class="h-2 bg-gray-500 rounded"></div>
							</div>
						</div>
					</div>
				</div>
			)}
			{!showLoader &&
				blogList.map((item, key) => (
					<Blog
						key={key}
						title={item.title}
						content={item.content}
						date={moment(item.date).format("DD/MM/YY HH:mm")}
						author={item.author}
					/>
				))}
		</div>
	);
}

export default AllBlogs;
