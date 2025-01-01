import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-10">
        <h2 className="text-center text-3xl font-bold md:text-5xl animate-fade-in-up transition-all ease-in-out duration-500 transform hover:text-pink-600 text-purple-600 hover:translate-y-[-5] ">
          Destination Guidebooks
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          I’ve written a few destination guidebooks that will help you travel
          cheaper, better, and smarter. Unlike other guidebooks, these are
          specifically written for budget travelers! They contain detailed tips,
          advice, and insider information so you can get off the beaten path,
          away from the crowds, and save money when you travel. Straight to the
          point, no fluff.
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
          {[
            <Image
              src="/images/pic1.jpg"
              alt="Book 1"
              height={300}
              width={300}
            />,
            <Image
              src="/images/pic2.jpg"
              alt="Book 2"
              height={300}
              width={300}
            />,
            <Image
              src="/images/pic3.jpg"
              alt="Book 3"
              height={300}
              width={300}
            />,
            <Image
              src="/images/pic4.jpg"
              alt="Book 4"
              height={300}
              width={300}
            />,
            <Image
              src="/images/pic5.jpg"
              alt="Book 5"
              height={300}
              width={300}
            />,
            <Image
              src="/images/pic6.jpg"
              alt="Book 6"
              height={300}
              width={300}
            />,
          ].map((catgory, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center"
            >
              <div>{catgory}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
