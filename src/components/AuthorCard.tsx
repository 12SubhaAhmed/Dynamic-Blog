import React from "react";
import Image from "next/image";

export default function AuthorCard(){
    return(
        <div className="bg-neutral-100 shadow-lg rounded-lg p-6">
            <div className="flex items-center animation-fadeIn">

            <Image
            src="/images/pic.jpg"
            alt="author image"
            className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
            width={300}
            height={300}/>

            <div>
                <h3 className="text-xl font-bold">
                  Subha Sajjad
                </h3>
            </div>
            </div>

        <p className="mt-4 text-black leading-relaxed">Hello, fellow adventurers! I’m Subha Sajjad, and I’ve created this space to share my passion for travel, exploration, and discovery. Whether you’re seeking the vibrant streets of bustling cities, serene landscapes, or hidden gems tucked away from the usual tourist trails, you’ve come to the right place.

At The Adventurous Soul, I’ll be taking you on an unforgettable journey across the world—from iconic landmarks to the quieter corners where true magic happens. Through my stories, travel tips, and guides, I aim to inspire you to pack your bags, step outside your comfort zone, and explore all the incredible destinations this beautiful planet has to offer.

Join me as I share insights on everything from local cuisines and cultural treasures to epic adventures and peaceful escapes. So, let’s wander the world together—one destination at a time!

Happy travels! 🌏✨
              </p>
              <div className="mt-4 flex space-x-3">
                <a 
                href="#"
                className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-blue-700 transition duration-300">
                Twitter
                </a>

                <a 
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-blue-700 transition duration-300">
                Linkedin
                </a>

                <a 
                href="https://github.com/"
                className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-blue-700 transition duration-300">
                GitHub
                </a>
              </div>

        </div>
    )
}