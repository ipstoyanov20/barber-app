"use client";

import { useState } from "react";
import AuthGuard from "@/components/auth-guard"; // Import AuthGuard
import Link from "next/link";
import Image from "next/image"; // Using Next.js Image for optimization
import storageService from "@/services/storage-service";

function Navbar() {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
	console.log("toggleDropdown", isDropdownOpen);
  };
  const logout = () => {
	storageService.deleteUserData();
	setIsLogged(false);
  };
  return (
		<nav className="fixed top-0 w-full z-[50] bg-transparent text-black backdrop-blur-3xl bg-opacity-15 backdrop-filter">
			{/* AuthGuard manages login state */}
			<AuthGuard onAuthChange={setIsLogged} />

			<ul className="flex h-20 bg-transparent space-x-5 items-center justify-between w-full">
				{/* Left-side navigation items */}
				<div className="flex space-x-5 justify-center items-center">
					<li className="p-3 rounded-xl ml-5">
						<Link
							href="/#services"
							className="font-bold font-cabinet relative nav-link cursor-pointer text-xl tracking-wide"
						>
							Services
						</Link>
					</li>
					<li className="p-3 rounded-xl ml-5">
						<Link
							href="/#about"
							className="font-bold font-cabinet relative nav-link cursor-pointer text-xl tracking-wide"
						>
							About Us
						</Link>
					</li>
				</div>

				{/* Right-side navigation items */}
				<div className="flex space-x-5 items-center">
					<li className="p-3 rounded-xl mr-5">
						<Link href="/book">
							<p className="z-50 font-bold font-cabinet cursor-pointer px-5 py-2 text-[#FAF5F1] bg-bordo transition-all hover:bg-bordo/90 relative tracking-wide text-xl">
								Book Now
							</p>
						</Link>
					</li>
					<li className="p-3 rounded-xl absolute right-[9%]">
						{isLogged ? (
							<div className="relative">
								<button className="cursor-pointer" onClick={toggleDropdown}>
									<Image
										src="/avatar.png" // Make sure the image is in the public folder or use an appropriate path
										alt="User Avatar"
										width={40}
										height={40}
										className="rounded-full hover:scale-105 transition-all"
									/>
								</button>

								{/* Dropdown menu */}
								{isDropdownOpen && (
									<div className="absolute top-12 right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
										<ul>
											<li className="w-full">
												<button className="w-full" onClick={logout}>
													<p className="w-full rounded-t-lg block px-4 font-cabinet font-semibold text-left py-2 hover:text-white hover:bg-bordo text-black">
														My reservations
													</p>
												</button>
											</li>
											<li className="w-full">
												<button className="w-full" onClick={logout}>
													<p className="w-full rounded-b-lg block px-4 font-cabinet font-semibold text-left py-2 hover:text-white hover:bg-bordo text-black">
														Logout
													</p>
												</button>
											</li>
										</ul>
									</div>
								)}
							</div>
						) : (
							<Link href="/login">
								<p className="z-50 font-bold font-cabinet cursor-pointer px-5 py-2 hover:bg-[#dad5d2] transition-all bg-[#FAF5F1] relative tracking-wide text-xl">
									Log In
								</p>
							</Link>
						)}
					</li>

					{/* Logo */}
					<span className="logo absolute left-1/2 -translate-x-8">
						<Link href="/">
							<Image
								src="/favicon.ico" // Same here for favicon
								alt="Logo"
								width={48} // Adjust the size of the logo as needed
								height={48}
								className="rounded-full"
							/>
						</Link>
					</span>
				</div>
			</ul>
		</nav>
	);
}

export default Navbar;
