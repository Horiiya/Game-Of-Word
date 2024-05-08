// 'use client'
// import React from 'react';
// import { useState } from 'react'
// import CardGame from "./Components/CardGame"; 
// import Data from './Data.json';

// export default function Home() {
//   // const [score, setScore] = useState<number>(0);
//   const score = 0;
//   const filteredData = Data.filter((post) => post.id === 1);
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



'use client'
import React from 'react';
import { useState } from 'react'
import CardGame from "./Components/CardGame"; 
import Data from './Data.json';
import Button from './Components/Button';
import { useRouter } from 'next/navigation';


export default function Home() {
  const [score, setScore] = useState<number>(0);
  // const score = 0;
  const filteredData = Data.filter((post) => post.id === 1);
  const post = filteredData[0]; // Assuming you only want to display the first post
  const router = useRouter();

  return(
    <main>
      <p>Let's Play Game</p>
      <Button
        name="Play"
        fnOnClick={() => {
          setTimeout(() => {
            router.push(`/question${1}?`)
          }, 500); // รอ 1 วินาทีก่อนที่จะ redirect
        }}
      />
    </main>  
  );

}
