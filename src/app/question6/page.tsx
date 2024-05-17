// 'use client'
// import React from 'react';
// import { useState } from 'react'
// import Data from '../Data.json';
// import { useRouter } from 'next/navigation';
// import dynamic from 'next/dynamic';

// const CardGame = dynamic(() => import("../Components/CardGame"), {
//   ssr: false,
// })

// export default function Home() {
//   const router = useRouter();
//   const filteredData = Data.filter((post) => post.id === 6);
//   const post = filteredData[0];

//   return(
//     <main>
//       <div key={post.id}>
//         <CardGame 
//           questionProps={post.id}
//           srcProps={post.src} 
//           altProps={post.alt}
//           descriptionProps={post.question}
//           nameOfButton1Props={post.choice1} 
//           nameOfButton2Props={post.choice2} 
//           nameOfButton3Props={post.choice3}
//           nameOfButton4Props={post.choice4}
//         />
//       </div>
//     </main>  
//   );
// }


'use client'
import React, { useEffect } from 'react';
import Data from '../Data.json';
import dynamic from 'next/dynamic';
import Button from '../Components/Button';
import { useRouter } from 'next/navigation';


const CardGame = dynamic(() => import("../Components/CardGame"), {
  ssr: false,
});


export default function Home() {
  const filteredData = Data.filter((post) => post.id === 6);
  const post = filteredData[0];
  const router = useRouter();

  useEffect(() => {
    // ตรวจสอบว่ามีข้อมูลใน local storage หรือไม่
    const storedQuestionStates = localStorage.getItem('questionStates');
    if (!storedQuestionStates) {
      // ถ้าไม่มีข้อมูลให้กำหนดค่าเริ่มต้นใน local storage
      const initialQuestionStates = Array.from({ length: 10 }, () => ({
        answerOnce: false,
        answerAlready: false,
      }));
      localStorage.setItem('questionStates', JSON.stringify(initialQuestionStates));
    }
  }, []);

  return (
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





