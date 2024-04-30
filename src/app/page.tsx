'use client'
import Image from "next/image";
import ListeningImg from "../app/ImageOfWord/listening.jpg";
import React from 'react';
import { useState } from 'react'
import ReactModal from 'react-modal';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


// export default function Counter() {
//   const [count, setCount] = useState(0)
let score: number = 0;
let checkResult: boolean = false;

export default function Home() {
  
  'use client'
  // const handleClick = () => {
  //   console.log('Action button clicked!');
  // };

  
  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);

  const openModalTrue = () => {
    checkResult = true;
    setModalTrueIsOpen(true);
    updateScore();
  };

  const closeModalTrue = () => {
    setModalTrueIsOpen(false);
  };

  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);

  const openModalFalse = () => {
    setModalFalseIsOpen(true);
  };

  const closeModalFalse = () => {
    setModalFalseIsOpen(false)
  }

  const updateScore = () => {
    if (checkResult) {
      score += 1;
      checkResult = false
    }
  };


  const router = useRouter();

  return (
    <main>
      <p className="text-blue-500 text-3xl text-center">Game Of Word</p>
      <p className="text-blue-500 text-3xl text-center">what is this word?</p>
      <p className="text-blue-500 text-3xl text-right">Score : {score}</p>
      <br></br>
      <div className="flex justify-center">
        <Image
        src={ListeningImg}
        alt="ImgListening"
        width={300}
        height={50}
        />
      </div>
      <br></br>
      <div className="flex justify-center gap-8">

      <button onClick={openModalTrue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Listening</button>
      <ReactModal
        isOpen={modalTrueIsOpen}
        onRequestClose={closeModalTrue}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            width: '500px', 
            height: '300px',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '20px',
          },
        }}
      >
        <h2 className="text-blue-500">It True</h2>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">ok</button>
        
      </ReactModal>

      <button onClick={openModalFalse} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Eating</button>
      <ReactModal
        isOpen={modalFalseIsOpen}
        onRequestClose={closeModalFalse}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            width: '500px', 
            height: '300px',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '20px',
          },
        }}
      >
        {/* <h2 className="text-blue-500">It False</h2>
        <Link href="/page2">
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">  
        ok;={score}</button>
        </Link>   */}

        <Link href={{
          pathname: '/page2',
          query : {
            score: score
          }
        }}>
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">  
        ok;={score}</button> Go to some another page</Link>  
      

      </ReactModal>


      {/* <button onClick={openModalFalse} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Drinking</button> */}

      </div>

    </main>
  
  );
}



