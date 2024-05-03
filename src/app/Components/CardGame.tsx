// 'use client'
// import React from 'react'
// import Image from "next/image";
// import ListeningImg from "../app/ImageOfWord/listening.jpg";
// import { useState } from 'react'
// import ReactModal from 'react-modal';
// // import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Picture from "./Picture";
// import Header from "./Header";
// import Button from "./Button";
// import ModalComponents from "./Modal"; 

// interface CardGameProps {
//   scoreProps: number;
//   questionProps: number;
//   srcProps: string;
//   altProps: string;
//   nameOfButton1Props: string;
//   nameOfButton2Props: string;
//   nameOfButton3Props: string;
//   nameOfButton4Props: string;
// }

// export function CardGame({scoreProps, questionProps, srcProps, altProps, nameOfButton1Props, nameOfButton2Props, nameOfButton3Props
//   , nameOfButton4Props
// }: CardGameProps) {

//   const [score, setScore] = useState<number>(scoreProps);
//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
//   // let question : number = questionProps;
//   const [numberOfClick, setNumberOfClick] = useState<number>(0);

//   return (
//     <main>
//       <Header />
//       <p className="text-3xl text-end">score : {score}</p>
//       <p className="text-3xl">Question{questionProps} :</p>
//       <Picture src={srcProps} alt={altProps}/>
//       <div className="flex bg-white-500 flex justify-center gap-6">
      
//       <Button
//         name={nameOfButton1Props}
//         fnOnClick={() => {
//           const newNumberOfClick = numberOfClick + 1;
//           setNumberOfClick(newNumberOfClick)
//           if(newNumberOfClick == 1) {
//             const newScore = score + 1;
//             setScore(newScore);
//             setModalTrueIsOpen(true); // Open modal directly on click
//             // countOfClick += 1
//           }
//           setModalTrueIsOpen(true);
          
//           }}
//         />
//         <ModalComponents nameOfModal="It's True" state={modalTrueIsOpen} setTest={setModalTrueIsOpen} scoreTest={score} question={questionProps} />

//         <Button
//           name={nameOfButton2Props}
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <Button
//           name={nameOfButton3Props}
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <Button
//           name={nameOfButton4Props}
//           fnOnClick={() => {
//             setModalFalseIsOpen(true);
//           }}
//         />

//         <ModalComponents nameOfModal="It's False" state={modalFalseIsOpen} setTest={setModalFalseIsOpen} scoreTest={score} question={questionProps}/>
//       </div>
//       <br className="word-break: break-all"/>
//       <div  className="flex bg-white-500 h-24">
//         <p>;=;</p>

//       </div>
//     </main>
//   )
// }

// export default Button;


import React, { useState } from 'react';
import Picture from './Picture';
import Header from './Header';
import Button from './Button';
import ModalComponents from './Modal';

interface CardGameProps {
  scoreProps: number;
  questionProps: number;
  srcProps: string;
  altProps: string;
  nameOfButton1Props: string;
  nameOfButton2Props: string;
  nameOfButton3Props: string;
  nameOfButton4Props: string;
}

export function CardGame({
  scoreProps,
  questionProps,
  srcProps,
  altProps,
  nameOfButton1Props,
  nameOfButton2Props,
  nameOfButton3Props,
  nameOfButton4Props,
}: CardGameProps) {
  const [score, setScore] = useState<number>(scoreProps);
  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
  const [numberOfClick, setNumberOfClick] = useState<number>(0);

  const handleButtonClick = (isCorrect: boolean) => {
    const newNumberOfClick = numberOfClick + 1;
    setNumberOfClick(newNumberOfClick);
    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      setModalTrueIsOpen(true);
    } else {
      setModalFalseIsOpen(true);
    }
  };

  return (
    <main>
      <Header />
      <p className="text-3xl text-end">Score: {score}</p>
      <p className="text-3xl">Question {questionProps}:</p>
      <Picture src={srcProps} alt={altProps} />
      <div className="flex bg-white-500 flex justify-center gap-6">
        <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(true)} />
        <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(false)} />
        <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(false)} />
        <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(false)} />

        <ModalComponents
          nameOfModal="It's True"
          state={modalTrueIsOpen}
          setTest={setModalTrueIsOpen}
          scoreTest={score}
          question={questionProps}
        />
        <ModalComponents
          nameOfModal="It's False"
          state={modalFalseIsOpen}
          setTest={setModalFalseIsOpen}
          scoreTest={score}
          question={questionProps}
        />
      </div>
      <br className="word-break: break-all" />
      <div className="flex bg-white-500 h-24">
        <p>;=;</p>
      </div>
    </main>
  );
}

export default CardGame;

