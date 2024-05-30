// Import statements
'use client'
import React from 'react';
import Button from './Components/Button'; // Assuming Button component is defined elsewhere
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LogoGame from '/public/ImageOfWord/logoGame.jpg'; 

// Function component with appropriate styling
export default function Home() {
  const router = useRouter();

  return (
    <main className="container mx-auto px-4 py-8 bg-white">  {/* Added container and basic padding */}
      <p className="text-blue-500 text-4xl text-center">Let's Play Game</p>  {/* Increased text size to 4xl */}
      <br />

      <div className="flex justify-center">
        <Image
          src={LogoGame}
          alt="LogoGame"
          width={700}
          height={300}
        />
      </div>

      <br />
      <br />

      {/* <div className="flex justify-center bg-white"> */}
      <div className="flex justify-center">

        <button className="bg-blueOfButton hover:bg-hoverOfButton text-white font-bold py-3 px-6 rounded-full flex text-xl"
          onClick={() => {
            setTimeout(() => {
              router.push(`/question${1}?`);
            }, 500);
          }}>
          Let's Play
        </button>
        {/* <div className="flex bg-white-500 h-[10rem]"></div> */}
          
        <br></br>
      </div>
      <div className="flex bg-white-500 h-[1.1rem]"></div>
      {/* <div className="flex bg-white-500 h-[10rem]"></div> */}
    </main>
  );
}