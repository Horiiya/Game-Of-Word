'use client'
import React, { useState, useEffect } from 'react';
import Data from '../Data.json';
import dynamic from 'next/dynamic';
import Button from '../Components/Button';
import { useRouter } from 'next/navigation';

const CardGameTest = dynamic(() => import("../Components/CardGameTest"), {
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

export default function Home() {
  const [data, setData] = useState<DataItem | null>(null);

  useEffect(() => {
    // ตรวจสอบว่ามีข้อมูลใน local storage
    const storedQuestionStates = localStorage.getItem('questionStates');
    if (!storedQuestionStates) {
      // ถ้าไม่มีข้อมูลให้กำหนดค่าเริ่มต้นใน local storage
      const initialQuestionStates = Array.from({ length: 10 }, () => ({
        answerOnce: false,
        answerAlready: false,
      }));
      localStorage.setItem('questionStates', JSON.stringify(initialQuestionStates));
    }

    const fetchData = async () => {
      
      const res = await fetch('/api/mysqlfeed');
      const result: DataItem[] = await res.json();
      console.log('Fetched data:', result);
      const filteredData = result.find((item: DataItem) => item.id === 1);
      setData(filteredData || null);
     
    };

    fetchData();
  }, []);

  return (
    <main>
      <div>
        <CardGameTest
          questionProps={Number(data?.id)}
          srcProps={String(data?.src)}
          altProps={String(data?.alt)}
          descriptionOfQuestionProps={String(data?.question)}
          nameOfButton1Props={String(data?.choice1)}
          nameOfButton2Props={String(data?.choice2)}
          nameOfButton3Props={String(data?.choice3)}
          nameOfButton4Props={String(data?.choice4)}
        />
      </div>
    </main>
  );
}
