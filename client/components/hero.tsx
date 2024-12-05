"use client"

import Link from "next/link";
import { useRef,useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";


function Hero() {
	const textPerfectRef = useRef(null)
	const textExRef = useRef(null)
	useEffect(() => {
    textPerfectRef.current ? new SplitType(textPerfectRef.current) : null;
    textExRef.current ? new SplitType(textExRef.current) : null;
    let PerfectChars = document.querySelectorAll("h1 .char");
    let ExChars = document.querySelectorAll("h2 .char");

	
    for (let i = 0; i < PerfectChars.length; i++) {
      PerfectChars[i].classList.add("translate-y-[200%]");
    }

    for (let i = 0; i < ExChars.length; i++) {
      ExChars[i].classList.add("translate-y-[200%]");
    }

    gsap.to(PerfectChars, {
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      opacity: 1,
      delay: 0,
    });
    
	gsap.to(ExChars, {
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      opacity: 1,
      delay: 0.5,
    });

  }, []);
		return (
			<section className="relative grid grid-cols-2 w-screen h-screen">
				<div className="w-full z-20 bg-white text-black p-6 grid place-content-center place-items-start">
					<span className="translate-x-[20%] -translate-y-0">
						<p className="font-cabinet text-5xl font-bold mb-4 text-bordo">
							Your ultimate barber shop
						</p>
						<h1 className="whitespace-nowrap font-cabinet text-9xl font-bold mb-6 leading-none">
							Your Pursuit of{" "}
							<span ref={textPerfectRef} className="translate-y-6 overflow-hidden text-bordo inline-block rounded-xl backdrop-blur-xl backdrop-filter bg-opacity-10">
								Perfection
							</span>{" "}
							<br /> Our Work of{" "}
							<span  ref={textExRef}  className="overflow-hidden translate-y-8 text-bordo inline-block mb-1 rounded-xl backdrop-blur-xl backdrop-filter bg-opacity-10">
								Excellence
							</span>
						</h1>
						<p className="font-cabinet text-3xl w-[50%] font-semibold">
							Experience premium grooming services tailored to your
							individuality.
						</p>
						<Link href={`/book`}>
							<button className="bg-bordo transition-all rounded-md font-bold mt-10 px-10 py-2 text-white font-cabinet text-xl hover:bg-bordo/90">
								Book Now
							</button>
						</Link>
						<Link href={`/#schedule`}>
							<button className="bg-transparent border-2 border-bordo text-bordo rounded-md font-bold ml-5 mt-10 px-10 py-2 font-cabinet text-xl">
								See schedule
							</button>
						</Link>
						<div className="grid grid-cols-3 ml-5 mt-10 w-[50%]">
							<div className="flex flex-col relative">
								<span className="w-1 h-full bg-bordo right-14 absolute"></span>
								<p className="font-cabinet text-3xl font-bold text-black">
									<span className="text-bordo text-4xl">+</span> 4.9
								</p>
								<p className="font-cabinet text-xl font-semibold">Rating</p>
							</div>
							<div className="flex flex-col relative">
								<span className="w-1 h-full bg-bordo right-14 absolute"></span>
								<p className="font-cabinet text-3xl font-bold text-black">
									<span className="text-bordo text-4xl">+</span>
									100
								</p>
								<p className="font-cabinet text-xl font-semibold">Customers</p>
							</div>
							<div className="flex flex-col relative">
								<p className="font-cabinet text-3xl font-bold text-black">
									<span className="text-bordo text-4xl">+</span>5
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
							className="w-[50%] rounded-xl rotate-[-24deg] absolute h-[70%]"
							alt="image"
						/>
						<img
							src="cut.png"
							className="w-[50%] rounded-xl -rotate-12  absolute h-[70%]"
							alt="image"
						/>
						<img
							src="cut.png"
							className="w-[50%] rounded-xl rotate-0 absolute h-[70%]"
							alt="image"
						/>
					</div>
				</div>
			</section>
		);
}

export default Hero