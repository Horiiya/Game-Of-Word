import Link from 'next/link';
import React from 'react';

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
