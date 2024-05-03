// //old version don't use CardGame

// 'use client'
// import Image from "next/image";
// import ListeningImg from "../app/ImageOfWord/listening.jpg";
// import React from 'react';
// import { useState } from 'react'
// import ReactModal from 'react-modal';
// // import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Picture from "./Components/Picture";
// import Header from "./Components/Header";
// import Button from "./Components/Button";
// import ModalComponents from "./Components/Modal"; 

// export default function Home() {
  
//   const [score, setScore] = useState<number>(0);
//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
//   let questionNum : number = 1;
//   const [numberOfClick, setNumberOfClick] = useState<number>(0);

//   return (
//     <main>
//       <Header />
//       <p className="text-3xl text-end">score : {score}</p>
//       <p className="text-3xl text-center">Question {questionNum}</p>
//       <Picture src='https://tenrycolle.com/wp-content/uploads/2022/09/listening-skill-process-1024x1024.jpg' alt="Listening" />
//       <div className="flex bg-white-500 flex justify-center gap-6">
      
//         <Button
//           name="Listening"
//           fnOnClick={() => {
//             const newNumberOfClick = numberOfClick + 1;
//             setNumberOfClick(newNumberOfClick)
//             if(newNumberOfClick == 1) {
//               const newScore = score + 1;
//               setScore(newScore);
//               setModalTrueIsOpen(true); // Open modal directly on click
//             }
//             setModalTrueIsOpen(true);
//             }}
//         />
//         <ModalComponents nameOfModal="It's True" state={modalTrueIsOpen} setTest={setModalTrueIsOpen} scoreTest={score} question={questionNum + 1}/>

//         <Button
//           name="Eating"
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <Button
//           name="Running"
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <Button
//           name="Drinking"
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <ModalComponents nameOfModal="It's False" state={modalFalseIsOpen} setTest={setModalFalseIsOpen} scoreTest={score} question={questionNum + 1}/>
//       </div>
//       <div  className="flex bg-white-500 h-[7.2rem]">

//         <p>;=;</p>

//       </div>
//     </main>
//   );
// }






// new version but is not done 

// 'use client'
// import Image from "next/image";
// import ListeningImg from "../app/ImageOfWord/listening.jpg";
// import React from 'react';
// import { useState } from 'react'
// import ReactModal from 'react-modal';
// // import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Picture from "./Components/Picture";
// import Header from "./Components/Header";
// import Button from "./Components/Button";
// import ModalComponents from "./Components/Modal"; 

// export default function Home() {
  
//   const [score, setScore] = useState<number>(0);
//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
//   let questionNum : number = 1;
//   const [numberOfClick, setNumberOfClick] = useState<number>(0);

//   return (
//     <main>
//       <Header />
//       <p className="text-3xl text-end">score : {score}</p>
//       <p className="text-3xl text-center">Question {questionNum}</p>
//       <Picture src='https://tenrycolle.com/wp-content/uploads/2022/09/listening-skill-process-1024x1024.jpg' alt="Listening" />
//       <div className="flex bg-white-500 flex justify-center gap-6">
      
//       <Button
//         name="Listening"
//         fnOnClick={() => {
//           const newNumberOfClick = numberOfClick + 1;
//           setNumberOfClick(newNumberOfClick)
//           if(newNumberOfClick == 1) {
//             const newScore = score + 1;
//             setScore(newScore);
//             setModalTrueIsOpen(true); // Open modal directly on click
//           }
//           setModalTrueIsOpen(true);
          
//           }}
//         />
//         <ModalComponents nameOfModal="It's True" state={modalTrueIsOpen} setTest={setModalTrueIsOpen} scoreTest={score} question={questionNum + 1}/>

//         <Button
//           name="Eating"
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <Button
//           name="Running"
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <Button
//           name="Drinking"
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <ModalComponents nameOfModal="It's False" state={modalFalseIsOpen} setTest={setModalFalseIsOpen} scoreTest={score} question={questionNum + 1}/>
//       </div>
//       <div  className="flex bg-white-500 h-[7.2rem]">
//         <p>;=;</p>

//       </div>
//     </main>
//   );
// }





'use client'

import Image from "next/image";
import ListeningImg from "../app/ImageOfWord/listening.jpg";
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
  const filteredData = Data.filter((post) => post.id === 2);
  const post = filteredData[0]; // Assuming you only want to display the first post

  return(
    <main>
      <div key={post.id}>
      <CardGame 
        scoreProps={score} 
        questionProps={post.id}
        srcProps={post.src} 
        altProps={post.alt}
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