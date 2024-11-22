"use client"
function Hero() {
    return (
			<section className="relative grid grid-cols-2 w-screen h-screen">
				<div className="w-full z-20 bg-white text-black p-6 grid place-content-center place-items-start">
					<span className="translate-x-[15%] -translate-y-0">
						<p className="font-cabinet text-5xl font-bold mb-4 text-[#AD3520]">
							Your ultimate barber shop
						</p>
						<p className="whitespace-nowrap font-cabinet text-9xl font-bold mb-6 leading-none">
							Your Pursuit of <span className="text-[#AD3520]">Pefection</span>{" "}
							<br /> Our Work of{" "}
							<span className="text-[#AD3520]">Excelence</span>
						</p>
						<p className="font-cabinet text-3xl w-[50%] font-semibold">
							Experience premium grooming services tailored to your
							individuality.
						</p>
						<button className="bg-[#AD3520] rounded-md font-bold mt-10 px-10 py-2 text-white font-cabinet text-xl">
							Book Now
						</button>
						<button className="bg-transparent border-2 border-[#AD3520] text-[#AD3520] rounded-md font-bold ml-5 mt-10 px-10 py-2 font-cabinet text-xl">
							See schedule
						</button>
						<div className="grid grid-cols-3 ml-5 mt-10 w-[50%]">
							<div className="flex flex-col relative">
								<span className="w-1 h-full bg-[#AD3520] right-14 absolute"></span>
								<p className="font-cabinet text-3xl font-bold text-black">
									<span className="text-[#AD3520] text-4xl">+</span> 4.9
								</p>
								<p className="font-cabinet text-xl font-semibold">Rating</p>
							</div>
							<div className="flex flex-col relative">
								<span className="w-1 h-full bg-[#AD3520] right-14 absolute"></span>
								<p className="font-cabinet text-3xl font-bold text-black">
									<span className="text-[#AD3520] text-4xl">+</span>
									100
								</p>
								<p className="font-cabinet text-xl font-semibold">Customers</p>
							</div>
							<div className="flex flex-col relative">
								<p className="font-cabinet text-3xl font-bold text-black">
									<span className="text-[#AD3520] text-4xl">+</span>5
								</p>
								<p className="font-cabinet text-xl font-semibold">Customers</p>
							</div>
						</div>
					</span>
				</div>
				<div className="w-full z-10 bg-[#FAF5F1]">
					<div className="grid grid-cols-1 place-content-center place-items-center relative h-full w-full">
						<img
							src="cut.png"
							className="w-[50%] rounded-xl rotate-[-24deg]  absolute h-[70%]"
							alt="image"
						/>
						<img
							src="cut.png"
							className="w-[50%] rounded-xl -rotate-12  absolute h-[70%]"
							alt="image"
						/>
						<img
							src="cut.png"
							className="w-[50%] rounded-xl rotate-0  absolute h-[70%]"
							alt="image"
						/>
					</div>
				</div>
			</section>
		);
}

export default Hero