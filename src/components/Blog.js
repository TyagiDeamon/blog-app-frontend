import React from 'react'

function Blog({title, content, date, author}) {
  return (
		<div className="w-[80%] mx-auto rounded-md flex flex-col p-4 shadow-md hover:scale-105 transition snap-start bg-white">
			<div className="text-center font-bold text-lg text-green-500">
				{title}
			</div>
			<div className="text-center text-lg italic text-cyan-500">{content}</div>
			<div className="flex justify-around mt-2 text-sm text-rose-500">
				<span>{date}</span>
				<span>{author}</span>
			</div>
		</div>
	);
}

export default Blog
