// 'use client'
// import Image from "next/image";
// import ListeningImg from "../app/ImageOfWord/listening.jpg";
// import React from 'react';
// import { useState } from 'react'
// import ReactModal from 'react-modal';
// // import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Picture from "../Components/Picture";
// import Header from "../Components/Header";
// import Button from "../Components/Button";
// import ModalComponents from "../Components/Modal"; 

// export default function Page({ searchParams } : {
//   searchParams: {
//     score : number;
//   };

  
// }) {
//   console.log(searchParams.score)
//   const score1 = searchParams.score
 
//   return (
//     <div>
//       <Link href="/page2">This is page 2</Link>
//       <p>this is my score{score1}</p>
//       <p className="text-blue-500 text-3xl text-center">Game Of Word</p>
//       <p className="text-blue-500 text-3xl text-center">what is this word?</p>
//       <p className="text-blue-500 text-3xl text-right">Score : {score1}</p>
//     </div>
//   )
// }



// 'use client'
// import React from 'react';
// import { useState } from 'react'
// import CardGame from "../Components/CardGame"; 
// import Data from '../Data.json';

// export default function Home() {
//   const [score, setScore] = useState<number>(0);
//   const filteredData = Data.filter((post) => post.id === 2);
//   const post = filteredData[0]; // Assuming you only want to display the first post

//   return(
//     <main>
//       <div key={post.id}>
//       <CardGame 
//         scoreProps={score} 
//         questionProps={post.id}
//         srcProps={post.src} 
//         altProps={post.alt}
//         descriptionProps={post.question}
//         nameOfButton1Props={post.choice1} 
//         nameOfButton2Props={post.choice2} 
//         nameOfButton3Props={post.choice3}
//         nameOfButton4Props={post.choice4}
//       />
//       </div>
//     </main>  
//   );
// }



// 'use client'
// import Image from "next/image";
// import ListeningImg from "../app/ImageOfWord/listening.jpg";
// import React from 'react';
// import { useState } from 'react'
// import ReactModal from 'react-modal';
// // import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Picture from "../Components/Picture";
// import Header from "../Components/Header";
// import Button from "../Components/Button";
// import ModalComponents from "../Components/Modal";
// import CardGame from "../Components/CardGame"; 
// import Data from '../Data.json'; 

// export default function Page({ searchParams } : {
//   searchParams: {
//     score: string
//   };

// }) {

//   // console.log(searchParams.score)
//   const scoreTest = Number(searchParams.score)
//   const [score, setScore] = useState<number>(scoreTest);
//   const filteredData = Data.filter((post) => post.id === 4);
//   const post = filteredData[0]; // Assuming you only want to display the first post
 
//   return (
//     <main>
//       <div key={post.id}>
//       <p>score test : {score}</p>
//       <CardGame 
//         questionProps={post.id}
//         srcProps={post.src} 
//         altProps={post.alt}
//         descriptionProps={post.question}
//         nameOfButton1Props={post.choice1} 
//         nameOfButton2Props={post.choice2} 
//         nameOfButton3Props={post.choice3}
//         nameOfButton4Props={post.choice4}
//       />
//       </div>
//     </main>  
//   )
// }



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
  const filteredData = Data.filter((post) => post.id === 4);
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

