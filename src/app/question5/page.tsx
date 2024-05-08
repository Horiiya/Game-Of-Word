'use client'
import React from 'react';
import { useState } from 'react'
import Data from '../Data.json';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const CardGame = dynamic(() => import("../Components/CardGame"), {
  ssr: false,
})

export default function Home() {
  const router = useRouter();
  const filteredData = Data.filter((post) => post.id === 5);
  const post = filteredData[0];

  return(
    <main>
      <div key={post.id}>
        <CardGame 
          questionProps={post.id}
          srcProps={post.src} 
          altProps={post.alt}
          descriptionProps={post.question}
          nameOfButton1Props={post.choice1} 
          nameOfButton2Props={post.choice2} 
          nameOfButton3Props={post.choice3}
          nameOfButton4Props={post.choice4}
        />
      </div>
    </main>  
  );
}
