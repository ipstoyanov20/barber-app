
function Navbar() {
  return (
		<nav className="flex items-center justify-between px-6 py-4 bg-transparent text-white">
			<div className="w-full h-full grid place-content-center place-items-center absolute">
      <div className="relative grid grid-rows-1 h-8 w-8 rounded-full after:absolute after:text-white after:ml-10 after:z-20 after:content-['Shop'] before:absolute before:text-white before:-left-14 after:top-1 before:top-1 before:z-20 before:content-['Barber']">
					<img src="/favicon.ico" alt="Logo" className="h-8 w-8 rounded-full " />
				</div>
			</div>
			<div className="flex items-center space-x-6">
				<a href="#" className="text-lg font-semibold hover:text-red-500">
					Home
				</a>
				<a href="#" className="text-lg font-semibold hover:text-red-500">
					About Us
				</a>
				<a href="#" className="text-lg font-semibold hover:text-red-500">
					Services
				</a>
				<a href="#" className="text-lg font-semibold hover:text-red-500">
					Contact
				</a>
			</div>

			{/* Right Section */}
			<div className="flex items-center space-x-6">
				<button
					className="text-lg font-semibold hover:text-red-500"
					type="button"
				>
					Book Now
				</button>
			</div>
		</nav>
	);
}

export default Navbar
