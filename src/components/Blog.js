import React from 'react'

function Blog({title, content, date, author}) {
  return (
		<div className="w-[80%] mx-auto rounded-md flex flex-col p-4 shadow-md bg-gradient-to-r from-rose-500 via-slate-300 to-violet-500 shadow-blue-600">
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
