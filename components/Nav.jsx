import React from 'react';
import requests from '../utils/request';
import { useRouter } from 'next/router';

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer pb-5 transition duration-125 transform  hover:scale-125 active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0B1E29] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
