
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
      <p>Number Of Question {Data.length}</p>
      <p>Number Of Correct Question {score}</p>
    </main>
  );
}
