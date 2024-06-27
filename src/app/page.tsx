'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LogoGame from '/public/ImageOfWord/logoGame.jpg'; 
import bg from '/public/ImageOfWord/bg.jpg'
import LessThan from '/public/ImageOfWord/lessThan.jpg'
import { useState } from 'react';

// Function component with appropriate styling
export default function Home() {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);


  return (
    // <main className="container mx-auto px-4 py-8 bg-white">  {/* Added container and basic padding */}
    <main className="container mx-auto px-4 py-7 bg-my-image">  {/* Added container and basic padding */}
      <p className="text-blueHeader text-6xl text-center text-shadow [text-shadow:_0_2px_0_rgb(0_0_0_/_50%)] max-[320px]:text-[35px]">Let's Play Game</p>  {/* Increased text size to 4xl */}
      {/* <h2 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">Hello</h2> */}
      <br />
      <div className="flex h-[0.5rem] max-[320px]:h-[3rem]"></div>

      <div className="flex justify-center">
      {/* <div className="flex bg-red-500 h-[1.1rem]"></div> */}

      <img className='rounded-[1.7rem] max-[320px]:rounded-[1rem]'
          src="/ImageOfWord/logoGame.jpg"
          alt="LogoGame"
          width={700}
          height={300}
          
        />
      <div className="flex bg-red-500 h-[5rem]"></div>
      
      </div>

      <div className="flex h-[2rem]"></div>
      <div className='max-[320px]:h-[5rem]'/>

      {/* <div className="flex h-[0.6rem]"></div> */}
      

      <div className="flex justify-center">
      {/* <div className="flex justify-center"> */}
        
        {/* <button className="bg-blueOfButton hover:bg-hoverOfButton text-white font-bold py-3 px-6 rounded-full flex text-xl"
          onClick={() => {
            setTimeout(() => {
              router.push(`/question/${1}?`);
            }, 500);
          }}>
          Let's Play
        </button> */}


        <button className="px-4 py-2 rounded-[1.5rem] border border-black 
        bg-white text-black text-[30px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
        transition duration-200 hover:bg-gray-300 border-2
        max-[320px]:text-[20px]"
          onClick={() => {
            setTimeout(() => {
              router.push(`/question/${1}?`);
            }, 500);
          }}>
          Let's Play
        </button>

        
          
        {/* <br></br> */}
      </div>


      {/* <div className="flex bg-red-500 h-[1.1rem]"></div> */}

      <Image
      alt="Mountains"
      src={bg}
      placeholder="blur"
      quality={100}
      objectFit="object-cover" 
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1
      }}
      />


      {/* <button className="rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Hover me
      </button> */}

    </main>
  );
}