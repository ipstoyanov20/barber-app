"use client";

import { useState } from "react";
import AuthGuard from "@/components/auth-guard"; // Import AuthGuard
// import storageService from "@/services/storage-service";

function Navbar() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[50] bg-transparent text-black backdrop-blur-md bg-opacity-15 backdrop-filter">
      {/* AuthGuard manages login state */}
      <AuthGuard onAuthChange={setIsLogged} />

      <ul className="flex h-20 bg-transparent space-x-5 items-center justify-between w-full">
        <div className="flex flex-row space-x-5 justify-center items-center">
          <li className="p-3 rounded-xl ml-5">
            <p className="font-bold font-cabinet cursor-pointer nav-link relative overflow-x-clip tracking-wide text-xl">
              Services
            </p>
          </li>
          <li className="p-3 rounded-xl ml-5">
            <p className="font-bold font-cabinet cursor-pointer nav-link relative overflow-x-clip tracking-wide text-xl">
              About us
            </p>
          </li>
        </div>
        <li className="p-3 rounded-xl absolute right-5">
          <a href="/book">
            <p className="z-50 font-bold font-cabinet cursor-pointer px-5 py-2 text-[#FAF5F1] bg-[#AD3520] transition-all hover:bg-[#AD3520]/90 relative overflow-x-clip tracking-wide text-xl">
              Book Now
            </p>
          </a>
        </li>
        <li className="p-3 rounded-xl absolute right-[9%]">
          {isLogged ? (
            <a href="/profile">
              <img
                src="avatar.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          ) : (
            <a href="/login">
              <p className="z-50 font-bold font-cabinet cursor-pointer px-5 py-2 hover:bg-[#dad5d2] transition-all bg-[#FAF5F1] relative overflow-x-clip tracking-wide text-xl">
                Log in
              </p>
            </a>
          )}
        </li>
        <span className="logo absolute flex flex-row left-1/2 -translate-x-8 translate-y-2 w-full h-full">
          <img className="w-12 h-12 rounded-full" src="favicon.ico" alt="Logo" />
        </span>
      </ul>
    </nav>
  );
}

export default Navbar;
