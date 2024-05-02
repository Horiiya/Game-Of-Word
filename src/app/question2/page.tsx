'use client'
import Image from "next/image";
import ListeningImg from "../app/ImageOfWord/listening.jpg";
import React from 'react';
import { useState } from 'react'
import ReactModal from 'react-modal';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Picture from "../Components/Picture";
import Header from "../Components/Header";
import Button from "../Components/Button";
import ModalComponents from "../Components/Modal"; 

export default function Page({ searchParams } : {
  searchParams: {
    score : number;
  };

  
}) {
  console.log(searchParams.score)
  const score = searchParams.score
 
  return (
    <div>
      <Link href="/page2">This is page 2</Link>
      <p>this is my score{score}</p>
      <p className="text-blue-500 text-3xl text-center">Game Of Word</p>
      <p className="text-blue-500 text-3xl text-center">what is this word?</p>
      <p className="text-blue-500 text-3xl text-right">Score : {score}</p>
    </div>
  )
}
