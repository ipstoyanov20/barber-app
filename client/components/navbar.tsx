"use client";

function Navbar() {
  return (
		<nav className="fixed top-0 w-full z-[50] bg-transparent text-black backdrop-blur-sm bg-opacity-15 backdrop-filter">
			<ul className="flex h-20 bg-transparent space-x-5 items-center justify-between w-full">
				<div className="flex flex-row space-x-5 justify-center items-center">
					<li className="p-3 rounded-xl ml-5">
						<p className="font-bold font-cabinet nav-link relative overflow-x-clip tracking-wide text-xl">
							Barbers
						</p>
					</li>
					<li className="p-3 rounded-xl ml-5">
						<p className="font-bold font-cabinet nav-link relative overflow-x-clip tracking-wide text-xl">
							Contact
						</p>
					</li>
				</div>
				<li className="p-3 rounded-xl absolute right-5">
					<p className="font-bold font-cabinet nav-link relative overflow-x-clip tracking-wide text-xl">
						Book
					</p>
				</li>
				<span className="logo absolute flex flex-row left-1/2 -translate-x-8 translate-y-2 w-full h-full">
					<img className="w-12 h-12 rounded-full" src="favicon.ico" alt="" />
				</span>
			</ul>
		</nav>
	);
}

export default Navbar;
