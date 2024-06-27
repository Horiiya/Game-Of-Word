'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import bg from '/public/ImageOfWord/bgOfQuestion.jpg'

const CardGame = dynamic(() => import("@/app/Components/CardGame"), {
  ssr: false,
});

interface DataItem {
  id: number;
  src: Text;
  alt: Text;
  question: Text;
  answer: Text;
  choice1: Text;
  choice2: Text;
  choice3: Text;
  choice4: Text;
  descriptionChoice1: Text;
  descriptionChoice2: Text;
  descriptionChoice3: Text;
  descriptionChoice4: Text;
}

export default function Home({
  params,
}: {
  params: { questionId : number };
}) {
  const [data, setData] = useState<DataItem | null>(null);

  useEffect(() => {
    // check if have data in local storage
    const storedQuestionStates = localStorage.getItem('questionStates');
    if (!storedQuestionStates) {
      // if not have data so set initial value in local storage 
      const initialQuestionStates = Array.from({ length: 10 }, () => ({
        answerOnce: false,
        answerAlready: false,
      }));
      localStorage.setItem('questionStates', JSON.stringify(initialQuestionStates));
    }

    const fetchData = async () => {
      
      const res = await fetch('/api/mysqlfeed');
      const result: DataItem[] = await res.json();
      // console.log('Fetched data:', result);
      const filteredData = result.find((item: DataItem) => item.id === Number(params.questionId));
      setData(filteredData || null);
      // console.log('Src is: ', String(data?.src));
      
    };

    fetchData();
  }, []);

  return (
    <main className=''>
      <div>

        <CardGame
          questionProps={Number(data?.id)}
          srcProps={String(data?.src)}
          altProps={String(data?.alt)}
          descriptionOfQuestionProps={String(data?.question)}
          nameOfButton1Props={String(data?.choice1)}
          nameOfButton2Props={String(data?.choice2)}
          nameOfButton3Props={String(data?.choice3)}
          nameOfButton4Props={String(data?.choice4)}
        />

        <div style={{
          position: 'fixed',
          width: '100%',
          height: '1000px',
          top: 0,
          left: 0,
          zIndex: -1,
          overflow: 'hidden',
        }}>
          <Image
            alt="background"
            src={bg}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

      </div>
    </main>
  );
}
