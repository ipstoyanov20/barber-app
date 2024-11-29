function Services() {
  const services = [
    {
      title: "Men's Haircut and Washing",
      duration: "60 min",
      description: "Haircut, washing with energizing shampoo and conditioner, application of styling products.",
      price: "45 BGN"
    },
    {
      title: "Men's Haircut and Short Beard Styling",
      duration: "60 min",
      description: "Haircut, styling of a short beard, washing with energizing shampoo and conditioner, application of moisturizing products.",
      price: "65 BGN"
    },
    {
      title: "Men's Haircut and Long Beard Styling",
      duration: "60 min",
      description: "Haircut, styling of a long beard, washing with energizing shampoo and conditioner, application of moisturizing products.",
      price: "70 BGN"
    },
    {
      title: "Men's Haircut and Royal Shaving",
      duration: "60 min",
      description: "Haircut, washing with energizing shampoo and conditioner, wet shaving with professional products.",
      price: "80 BGN"
    },
    {
      title: "Buzz Cut",
      duration: "30 min",
      description: "Clippers with a single guard.",
      price: "35 BGN"
    }
  ];
  
  return (
		<section id="services" className="w-screen h-auto pb-20 bg-[#FAF5F1]">
			<div className="w-full relative h-auto flex justify-start pt-10">
				<h1 className="z-20 whitespace-nowrap font-cabinet relative font-bold text-9xl ml-20 mt-20 text-bordo">
					Men's haircut <br /> and beard <br />
					styling
				</h1>
				<img className="z-10 absolute right-20" src="head.png" alt="" />
			</div>
			<span className="w-screen h-auto flex justify-center mt-48">
				<p className="z-20 font-bold font-cabinet text-3xl text-center text-bordo w-[40%]">
					Looking for the perfect service for professional beard styling and
					men's haircut in Sofia? Welcome to BARBERS BULGARIA – we are a center
					for comprehensive men's care with a team of proven professionals who
					will take care of your impeccable look.
				</p>
			</span>
			<span className="w-screen h-auto flex justify-center mt-20">
				<details>
					<summary className="list-none font-cabinet font-bold text-5xl cursor-pointer text-[#FAF5F1] py-5 px-3 bg-bordo flex items-center justify-center">
						Prices for beard styling and men's haircut in Sofia{" "}
						<span className="text-7xl mt-3 ml-5">+</span>
					</summary>
					<div className="mt-4">
						{services.map((service, index) => (
							<div
								key={index}
								className="border-b border-bordo pb-4 mb-4 last:border-none last:mb-0"
							>
								<h2 className="font-cabinet font-bold text-2xl text-gray-800">
									{service.title}
								</h2>
								<p className="font-cabinet text-lg text-gray-600">
									<strong>Duration:</strong> {service.duration}
								</p>
								<p className="font-cabinet text-lg text-gray-600">
									<strong>Description:</strong> {service.description}
								</p>
								<p className="font-cabinet text-lg text-gray-600">
									<strong>Price:</strong> {service.price}
								</p>
							</div>
						))}
					</div>
				</details>
			</span>
			<span className="w-screen h-auto flex justify-center mt-5">
				<div className="list-none font-cabinet font-bold text-5xl flex justify-between text-[#FAF5F1] w-[58%] h-36 py-5 px-3 bg-bordo items-center pl-10 pr-10">
					<p>Make reservation right now</p>
					<button className="px-7 py-5 bg-[#FAF5F1] rounded-full text-bordo  cursor-pointer">Book now</button>
				</div>
			</span>
		</section>
	);
}

export default Services