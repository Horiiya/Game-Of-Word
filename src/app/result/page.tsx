'use client'
import React, { useState, useEffect } from 'react';
import Data from '../Data.json';

export default function Result() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }
  }, []);

  const filteredData = Data.filter((post) => post.id === 10);
  const post = filteredData[0];

  return (
    <main>
      <div className="flex bg-white-500 h-[9.5rem]"></div>
      <div className='flex justify-center'>
        <div className="items-center bg-resultDiv w-[35rem] h-[25rem] rounded-[1rem]">
        <div className="flex bg-white-500 h-[1.5rem]"></div>
        <p className='text-center text-4xl'>Summarize of score</p>
        <div className="flex h-[1.5rem]"></div>
        <div className="border-b-4 border-borderDiv w-[35rem]"></div>
        <div className="flex h-[1.7rem]"></div>

        <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3'>Total Number Of Question {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {Data.length}</p>
        
        <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3'>Number Of Correct Question {'\u00A0\u00A0\u00A0'} : {score}</p>

        <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3'>Number Of InCorrect Question {'\u00A0'}: {Data.length - score}</p>
        <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3'>Number of score as percent {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {(score / Data.length) * 100}%</p>
        </div>
      </div>


      <div className="flex bg-white-500 h-[8.9rem]"></div>
      
    </main>
  );
}
