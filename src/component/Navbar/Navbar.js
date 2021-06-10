import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar border-b-2 border-b-gray-500">
            <div class="container flex justify-between w-50 items-center px-20 py-4 fixed">
                <div class="logo text-2xl">Tailwind</div>
                <div class="link flex justify-between items-center gap-x-6">                    
                    <a class="text-gray-600 hover:text-black"href="#Home">Home</a>
                    <a class="text-gray-600 hover:text-black"href="#About">About</a>
                    <a class="text-gray-600 hover:text-black"href="#Blog">Blog</a>
                    <a class="text-gray-600 hover:text-black"href="#Contact">Contact</a>
                    
                    </div>
            </div>
            
        </div>
    );
};

export default Navbar;