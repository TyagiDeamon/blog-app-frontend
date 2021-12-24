import React from 'react'

function Blog({title, content, date, author}) {
  return (
		<div className="w-[80%] mx-auto rounded-md flex flex-col p-4 shadow-md shadow-blue-600 bg-[#2c2c61] hover:scale-105 hover:opacity-100 opacity-100 md:opacity-50 transition snap-start">
			<div className="text-center font-bold text-lg">{title}</div>
			<div className="text-center text-lg italic">{content}</div>
			<div className="flex justify-around mt-2 text-sm">
				<span>{date}</span>
				<span>{author}</span>
			</div>
		</div>
	);
}

export default Blog
