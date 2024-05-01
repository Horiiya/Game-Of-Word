
// 2
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
// import ButtonTrue from "./Components/ButtonTrue";
// import ButtonFalse from "./Components/ButtonFalse";
// import Score from "./Components/Score";
// // import Test from "./Components/Score"


// // export default function Counter() {
// //   const [count, setCount] = useState(0)
// let score: number = 0;
// let checkResult: boolean = false;

// export default function Home() {
  
//   // 'use client'
//   // const handleClick = () => {
//   //   console.log('Action button clicked!');
//   // };

//   return (
//     <main>
      
//       <Header />
//       {/* <p className="text-blue-500 text-3xl text-right">Score : {score}</p> */}
//       <br></br>
//       <Score score={score}/>
      
//       <Picture src='https://tenrycolle.com/wp-content/uploads/2022/09/listening-skill-process-1024x1024.jpg' alt="Listening"/>
//       <ButtonTrue name='true'/>
//       <ButtonFalse name="False"/>
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

export default function Home() {
  
  // let scoreForModal: number = 0;
  // let newScore: number = 0;
  // const router = useRouter();
  const [score, setScore] = useState<number>(0);
  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);


  return (
    <main>
      <Header />
      <p>score : {score}</p>
      <Picture src='https://tenrycolle.com/wp-content/uploads/2022/09/listening-skill-process-1024x1024.jpg' alt="Listening" />
      
      <Button
        name="true"
        fnOnClick={() => {
          const newScore = score + 1;
          setScore(newScore);
          setModalTrueIsOpen(true); // Open modal directly on click
          //{modalTrueIsOpen && <ModalComponents nameOfModal="true1" state={modalTrueIsOpen} setTest={setModalTrueIsOpen} scoreTest={score} />}
        }}
      />
      <ModalComponents nameOfModal="true1" state={modalTrueIsOpen} setTest={setModalTrueIsOpen} scoreTest={score} />
      

      <Button
        name="False"
        fnOnClick={() => {
          setModalFalseIsOpen(true); // Open modal directly on click
          //<ModalComponents nameOfModal="button1" state={modalTrueIsOpen} setTest={setModalTrueIsOpen} scoreTest={score} />
          //{modalTrueIsOpen && <ModalComponents nameOfModal=";-;" state={modalTrueIsOpen} setTest={setModalTrueIsOpen} scoreTest={score} />}
        }}
      />
      <ModalComponents nameOfModal="true2" state={modalFalseIsOpen} setTest={setModalFalseIsOpen} scoreTest={score} />
      
    </main>
  );
}


