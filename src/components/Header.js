import React from 'react'

function Header() {
  return (
		<div className="bg-[#19194f] p-4 w-full border-b-2 shadow-sm shadow-cyan-800 border-orange-500 fixed top-0 z-10">
			<div className="font-mono text-gray-100 text-xl md:text-2xl font-extrabold">
				Blog<span className="italic font-normal">Buddy</span>
			</div>
		</div>
	);
}

export default Header;
