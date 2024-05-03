'use client'

import Image from "next/image";
import React from 'react';
import { useState } from 'react'
import ReactModal from 'react-modal';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Picture from "./Components/Picture";
import Header from "./Components/Header";
import Button from "./Components/Button";
import ModalComponents from "./Components/Modal";
import CardGame from "./Components/CardGame"; 
import Data from './Data.json';

export default function Home() {
  const [score, setScore] = useState<number>(0);
  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
  let questionNum : number = 1;
  const [numberOfClick, setNumberOfClick] = useState<number>(0);
  const filteredData = Data.filter((post) => post.id === 1);
  const post = filteredData[0]; // Assuming you only want to display the first post

  return(
    <main>
      <div key={post.id}>
      <CardGame 
        scoreProps={score} 
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






// import React from "react";
// import Data from './Data.json';

// export default function Home() {
//   // Assuming Data is your array of posts
//   const filteredData = Data.filter((post) => post.id === 2);

//   // Handle potential errors in Data or missing properties
//   // if (!filteredData.length) {
//   //   return <p>No posts found with ID 2 or there may be errors in your Data.json file.</p>;
//   // }

//   const post = filteredData[0]; // Assuming you only want to display the first post

//   return (
//     <div>
//       <div key={post.id} style={{ paddingLeft: "20px" }}>
//         <h3>ID: {post.id}</h3>
//         <h3>Question: {post.question}</h3>
//         {post.choice4 === post.answer ? ( // Use strict comparison
//           <p>It's true</p>
//         ) : (
//           <p>It's false</p>
//         )}
//         <h3>Answer: {post.answer}</h3>
//         <h4>Choice 1: {post.choice1}</h4> {/* Consistent capitalization */}
//         <h4>Choice 2: {post.choice2}</h4>
//         <h4>Choice 3: {post.choice3}</h4>
//         <h4>Choice 4: {post.choice4}</h4>
//       </div>
//     </div>
//   );
// }