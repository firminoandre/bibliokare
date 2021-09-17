import React from "react";

export const Header = () => {
    return (
        
<div className="rounded-b-lg w-full flex flex-row items-center p-2 justify-between bg-white shadow-xs bg-gray-100">
    <div className="font-extrabold ml-8 text-lg text-gray-800 hidden md:flex">
        BIBLIOKARE
        <svg class="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
    </div>
    <span className="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        
        <input type="search" name="serch" placeholder="Buscar livros" class="flex-grow px-4 text-white bg-gray-800 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
        </span>
        <div className="flex flex-row-reverse text-white mr-4 ml-4 md:hidden">
            
        </div>
        <div className="flex items-center mr-8 hidden md:flex">
            
            <a href="https://ibook-cataline.herokuapp.com/books" className="">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                </path>
            </svg>
            </a>
        </div>
    </div>

    )
}
