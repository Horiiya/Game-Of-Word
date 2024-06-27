'use client'
import React, { useState, useEffect } from 'react';

interface DataItem {
  id: number;
  src: string;
  alt: string;
  question: string;
  answer: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  descriptionChoice1: string;
  descriptionChoice2: string;
  descriptionChoice3: string;
  descriptionChoice4: string;
}

export default function Result() {
  const [score, setScore] = useState(0);
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }

    const fetchData = async () => {
      const res = await fetch('/api/mysqlfeed');
      const result: DataItem[] = await res.json();
      setDataCount(result.length);
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="flex bg-white-500 h-[9.5rem] max-[320px]:h-[30px]"></div>
      <div className='flex justify-center'>
        <div className="items-center bg-resultDiv w-[35rem] h-[25rem] rounded-[1rem] max-[320px]:w-[290px] max-[320px]:h-[525px]">
          <div className="flex bg-white-500 h-[1.5rem] max-[320px]:w-[290px]"></div>
          <p className='text-center text-4xl max-[320px]:text-[25px]'>Summarize of score</p>
          <div className="flex h-[1.5rem] max-[320px]:w-[290px]"></div>
          <div className="border-b-4 border-borderDiv w-[35rem] max-[320px]:w-[290px]"></div>
          <div className="flex h-[1.7rem]"></div>
          <div className='flex flex-col'> 
            <p>Total Number Of Question : {dataCount}</p>
            <p>Number Of Correct Question : {score}</p>
            <p>Number Of InCorrect Question : {dataCount - score}</p>
            <p>Number of score as percent {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {(dataCount ? (score / dataCount) * 100 : 0).toFixed(2)}%</p>
          </div>
        </div>
      </div>
      <div className="flex bg-white-500 h-[8.9rem] max-[320px]:h-[34.5px]"></div>
    </main>
  );
}
