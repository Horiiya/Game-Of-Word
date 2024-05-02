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
  
  const [score, setScore] = useState<number>(0);
  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);

  return (
    <main>
      <Header />
      <p className="text-3xl text-end">score : {score}</p>
      <Picture src='https://tenrycolle.com/wp-content/uploads/2022/09/listening-skill-process-1024x1024.jpg' alt="Listening" />

      <div className="flex bg-white-500 flex justify-center gap-6">
        <Button
          name="Listening"
          fnOnClick={() => {
            const newScore = score + 1;
            setScore(newScore);
            setModalTrueIsOpen(true); // Open modal directly on click
          }}
        />
        <ModalComponents nameOfModal="It's True" state={modalTrueIsOpen} setTest={setModalTrueIsOpen} scoreTest={score} />

        <Button
          name="Eating"
          fnOnClick={() => {
            setModalFalseIsOpen(true);
          }}
        />

        <Button
          name="Running"
          fnOnClick={() => {
            setModalFalseIsOpen(true);
          }}
        />

        <Button
          name="Drinking"
          fnOnClick={() => {
            setModalFalseIsOpen(true);
          }}
        />

        <ModalComponents nameOfModal="It's False" state={modalFalseIsOpen} setTest={setModalFalseIsOpen} scoreTest={score} />
      </div>
      
    </main>
  );
}


