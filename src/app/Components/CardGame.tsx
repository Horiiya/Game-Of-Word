// import React, { useState, useEffect } from 'react';
// import Picture from './Picture';
// import Header from './Header';
// import Button from './Button';
// import ModalComponents from './Modal';
// import Data from '../Data.json';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// interface CardGameProps {
//   questionProps: number;
//   srcProps: string;
//   altProps: string;
//   descriptionOfQuestionProps: string;
//   nameOfButton1Props: string;
//   nameOfButton2Props: string;
//   nameOfButton3Props: string;
//   nameOfButton4Props: string;  
// }

// interface DataItem {
//   id: number;
//   answer: Text;
//   choice1: Text;
//   choice2: Text;
//   choice3: Text;
//   choice4: Text;
//   descriptionChoice1: Text;
//   descriptionChoice2: Text;
//   descriptionChoice3: Text;
//   descriptionChoice4: Text;
// }

// export function CardGame({
//   questionProps,
//   srcProps,
//   altProps,
//   descriptionOfQuestionProps,
//   nameOfButton1Props,
//   nameOfButton2Props,
//   nameOfButton3Props,
//   nameOfButton4Props,
// }: CardGameProps) {
//   const router = useRouter();
//   const localStorageKey = 'answeredQuestions';
//   const initialAnsweredQuestions = JSON.parse(localStorage.getItem(localStorageKey) || '{}');
//   const [answeredQuestions, setAnsweredQuestions] = useState<{ [key: number]: boolean }>(initialAnsweredQuestions);

//   const initialAnswerOnce = JSON.parse(localStorage.getItem('answeredOnce') || '{}');
//   const [answeredOnce, setAnsweredOnce] = useState<{ [key: number]: boolean }>(initialAnswerOnce);

//   const [score, setScore] = useState<number>(() => {
//     const storedScore = localStorage.getItem('score');
//     return storedScore ? parseInt(storedScore, 10) : 0;
//   });

//   const [data, setData] = useState<DataItem | null>(null);

//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen2, setModalFalseIsOpen2] = useState<boolean>(false);
//   const [modalFalseIsOpen3, setModalFalseIsOpen3] = useState<boolean>(false);

//   useEffect(() => {
//     localStorage.setItem('score', score.toString());

//     const fetchData = async () => {
      
//       const res = await fetch('/api/mysqlfeed');
//       const result: DataItem[] = await res.json();
//       console.log('Fetched data:', result);
//       const filteredData = result.find((item: DataItem) => item.id === questionProps);
//       setData(filteredData || null);

//     }

//     fetchData();
//   }, [score]);


//   //ที่เพิ่มเข้ามา
//   useEffect(() => {
//     setModalTrueIsOpen(false);
//     setModalFalseIsOpen(false);
//     setModalFalseIsOpen2(false);
//     setModalFalseIsOpen3(false);
//   }, [questionProps]);

//   const handleButtonClick = (isCorrect: boolean, buttonIndex: number) => {
//     if (isCorrect) {
//       if (!answeredOnce[questionProps] && !answeredQuestions[questionProps]) {
//         const newScore: number = score + 1;
//         setScore(newScore);
//         const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
//         setAnsweredQuestions(updatedQuestions);
//         localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

//         const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
//         setAnsweredOnce(updatedAnswerOnce);
//         localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

//         setModalTrueIsOpen(true);
//       } else {
//         setModalTrueIsOpen(true);
//       }
//     } else {
//       // ตั้งชื่อ Modal ตามตำแหน่งของปุ่มที่ผิด
//       const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
//       setAnsweredQuestions(updatedQuestions);
//       localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

//       const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
//       setAnsweredOnce(updatedAnswerOnce);
//       localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

//       switch (buttonIndex) {
//         case 1:
//           setModalFalseIsOpen(true);
//           break;
//         case 2:
//           setModalFalseIsOpen2(true);
//           break;
//         case 3:
//           setModalFalseIsOpen3(true);
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   const index = new Array(4);
//   const description = new Array(4)
//   const buttonName = new Array(4)


//   const checkChoice = (choiceTest: string) => {
//     return choiceTest === String(data?.answer);
//   };

//   const chooseDescription = () => {
  
//     if (nameOfButton1Props === String(data?.answer)) {
//       index[0] = 0;
//       index[1] = 1;
//       index[2] = 2;
//       index[3] = 3;
  
//       description[0] = String(data?.descriptionChoice1);
//       description[1] = String(data?.descriptionChoice2);
//       description[2] = String(data?.descriptionChoice3);
//       description[3] = String(data?.descriptionChoice4);

//       buttonName[0] = String(data?.choice1)
//       buttonName[1] = String(data?.choice2)
//       buttonName[2] = String(data?.choice3)
//       buttonName[3] = String(data?.choice4)
//     }

//     else if (nameOfButton2Props === String(data?.answer)) {
//       index[0] = 1;
//       index[1] = 0;
//       index[2] = 2;
//       index[3] = 3;

//       description[0] = String(data?.descriptionChoice2);
//       description[1] = String(data?.descriptionChoice1);
//       description[2] = String(data?.descriptionChoice3);
//       description[3] = String(data?.descriptionChoice4);

//       buttonName[0] = String(data?.choice2)
//       buttonName[1] = String(data?.choice1)
//       buttonName[2] = String(data?.choice3)
//       buttonName[3] = String(data?.choice4)
//     }

//     else if (nameOfButton3Props === String(data?.answer)) {
//       index[0] = 1;
//       index[1] = 2;
//       index[2] = 0;
//       index[3] = 3;

//       description[0] = String(data?.descriptionChoice3);
//       description[1] = String(data?.descriptionChoice1);
//       description[2] = String(data?.descriptionChoice2);
//       description[3] = String(data?.descriptionChoice4);

//       buttonName[0] = String(data?.choice3)
//       buttonName[1] = String(data?.choice1)
//       buttonName[2] = String(data?.choice2)
//       buttonName[3] = String(data?.choice4)
//     }

//     else if (nameOfButton4Props === String(data?.answer)) {
//       index[0] = 1;
//       index[1] = 2;
//       index[2] = 3;
//       index[3] = 0;

//       description[0] = String(data?.descriptionChoice4);
//       description[1] = String(data?.descriptionChoice1);
//       description[2] = String(data?.descriptionChoice2);
//       description[3] = String(data?.descriptionChoice3);

//       buttonName[0] = String(data?.choice4)
//       buttonName[1] = String(data?.choice1)
//       buttonName[2] = String(data?.choice2)
//       buttonName[3] = String(data?.choice3)
//     }
  
//     return null;
//   };

//   return (
//     <main>
//       <Header />
//       {/* <p>${String(data?.choice3)}</p> */}
//       {/* <p>${String(data?.descriptionChoice3)}</p> */}
//       <div className='flex justify-end mr-[1.5rem]'>
//         <div className='bg-resultDiv w-[10rem] rounded-[2rem] h-[3rem] flex justify-center'>
//           <p className="text-3xl p-[0.4rem] items-end">Score: {score}</p>
//         </div>
//       </div>
//       <p className="text-3xl text-center">Question {questionProps}:</p>
//       <Picture src={srcProps} alt={altProps} description={descriptionOfQuestionProps} />

//       {chooseDescription()} {/* ใช้ chooseDescription และแสดงผล */}
//       <div className="flex bg-white-500 flex justify-center gap-6">
        
//         <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props), index[0])} />
//         <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])} />
//         <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])} />
//         <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])} />
  
//         <ModalComponents
//           nameOfModal="It's True"
//           // nameOfModal={buttonName[0] + "<br />It's True"}
//           chocieOfModal={buttonName[0]}
//           color='#CDEACC'
//           detailOfModal={description[0]}
//           state={modalTrueIsOpen}
//           setModal={setModalTrueIsOpen}
//           question={questionProps}
//         />

//         <ModalComponents
//           nameOfModal="It's False"
//           chocieOfModal={buttonName[1]}
//           color='#EBD8D8'
//           detailOfModal={description[1]}
//           state={modalFalseIsOpen}
//           setModal={setModalFalseIsOpen}
//           question={questionProps}
//         />

//         <ModalComponents
//           nameOfModal="It's False"
//           chocieOfModal={buttonName[2]}
//           color='#EBD8D8'
//           detailOfModal={description[2]}
//           state={modalFalseIsOpen2}
//           setModal={setModalFalseIsOpen2}
//           question={questionProps}
//         />

//         <ModalComponents
//           nameOfModal="It's False"
//           chocieOfModal={buttonName[3]}
//           color='#EBD8D8'
//           detailOfModal={description[3]}
//           state={modalFalseIsOpen3}
//           setModal={setModalFalseIsOpen3}
//           question={questionProps}
//         />

//       </div>
//       <br className="word-break: break-all" />
//       {/* <div className="flex bg-white-500 h-[4.7rem]"></div> */}
//       {questionProps === 1 && <div className="flex bg-white-500 h-[6.45rem]"></div>}

//       {questionProps >= 2 && (
//         <div>
//           <div className='flex ml-[1.5rem]'>
//             <Button name="Previous" fnOnClick={() => router.push(`/question${questionProps - 1}`)} />
//           </div>
//           <div className="flex bg-white-500 h-[4.05rem]"></div>
//         </div>
//       )}
//     </main>
//   );
  
// }

// export default CardGame;






import React, { useState, useEffect } from 'react';
import Picture from './Picture';
import Header from './Header';
import Button from './Button';
import ModalComponents from './Modal';
import Data from '../Data.json';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface CardGameProps {
  questionProps: number;
  srcProps: string;
  altProps: string;
  descriptionOfQuestionProps: string;
  nameOfButton1Props: string;
  nameOfButton2Props: string;
  nameOfButton3Props: string;
  nameOfButton4Props: string;  
}

interface DataItem {
  id: number;
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

export function CardGame({
  questionProps,
  srcProps,
  altProps,
  descriptionOfQuestionProps,
  nameOfButton1Props,
  nameOfButton2Props,
  nameOfButton3Props,
  nameOfButton4Props,
}: CardGameProps) {
  const router = useRouter();
  const localStorageKey = 'answeredQuestions';
  const initialAnsweredQuestions = JSON.parse(localStorage.getItem(localStorageKey) || '{}');
  const [answeredQuestions, setAnsweredQuestions] = useState<{ [key: number]: boolean }>(initialAnsweredQuestions);

  const initialAnswerOnce = JSON.parse(localStorage.getItem('answeredOnce') || '{}');
  const [answeredOnce, setAnsweredOnce] = useState<{ [key: number]: boolean }>(initialAnswerOnce);

  const [score, setScore] = useState<number>(() => {
    const storedScore = localStorage.getItem('score');
    return storedScore ? parseInt(storedScore, 10) : 0;
  });

  const [data, setData] = useState<DataItem | null>(null);

  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen2, setModalFalseIsOpen2] = useState<boolean>(false);
  const [modalFalseIsOpen3, setModalFalseIsOpen3] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('score', score.toString());

    const fetchData = async () => {
      const res = await fetch('/api/mysqlfeed');
      const result: DataItem[] = await res.json();
      console.log('Fetched data:', result);
      const filteredData = result.find((item: DataItem) => item.id === questionProps);
      setData(filteredData || null);
    }

    fetchData();
  }, [score, questionProps]);

  useEffect(() => {
    setModalTrueIsOpen(false);
    setModalFalseIsOpen(false);
    setModalFalseIsOpen2(false);
    setModalFalseIsOpen3(false);
  }, [questionProps]);

  const handleButtonClick = (isCorrect: boolean, buttonIndex: number) => {
    if (isCorrect) {
      if (!answeredOnce[questionProps] && !answeredQuestions[questionProps]) {
        const newScore: number = score + 1;
        setScore(newScore);
        const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
        setAnsweredQuestions(updatedQuestions);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

        const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
        setAnsweredOnce(updatedAnswerOnce);
        localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

        setModalTrueIsOpen(true);
      } else {
        setModalTrueIsOpen(true);
      }
    } else {
      const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
      setAnsweredQuestions(updatedQuestions);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

      const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
      setAnsweredOnce(updatedAnswerOnce);
      localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

      switch (buttonIndex) {
        case 1:
          setModalFalseIsOpen(true);
          break;
        case 2:
          setModalFalseIsOpen2(true);
          break;
        case 3:
          setModalFalseIsOpen3(true);
          break;
        default:
          break;
      }
    }
  };

  const index = new Array(4);
  const description = new Array(4);
  const buttonName = new Array(4);

  const checkChoice = (choiceTest: string) => {
    return choiceTest === String(data?.answer);
  };

  const chooseDescription = () => {
    if (nameOfButton1Props === String(data?.answer)) {
      index[0] = 0;
      index[1] = 1;
      index[2] = 2;
      index[3] = 3;

      description[0] = String(data?.descriptionChoice1);
      description[1] = String(data?.descriptionChoice2);
      description[2] = String(data?.descriptionChoice3);
      description[3] = String(data?.descriptionChoice4);

      buttonName[0] = String(data?.choice1);
      buttonName[1] = String(data?.choice2);
      buttonName[2] = String(data?.choice3);
      buttonName[3] = String(data?.choice4);
    } else if (nameOfButton2Props === String(data?.answer)) {
      index[0] = 1;
      index[1] = 0;
      index[2] = 2;
      index[3] = 3;

      description[0] = String(data?.descriptionChoice2);
      description[1] = String(data?.descriptionChoice1);
      description[2] = String(data?.descriptionChoice3);
      description[3] = String(data?.descriptionChoice4);

      buttonName[0] = String(data?.choice2);
      buttonName[1] = String(data?.choice1);
      buttonName[2] = String(data?.choice3);
      buttonName[3] = String(data?.choice4);
    } else if (nameOfButton3Props === String(data?.answer)) {
      index[0] = 1;
      index[1] = 2;
      index[2] = 0;
      index[3] = 3;

      description[0] = String(data?.descriptionChoice3);
      description[1] = String(data?.descriptionChoice1);
      description[2] = String(data?.descriptionChoice2);
      description[3] = String(data?.descriptionChoice4);

      buttonName[0] = String(data?.choice3);
      buttonName[1] = String(data?.choice1);
      buttonName[2] = String(data?.choice2);
      buttonName[3] = String(data?.choice4);
    } else if (nameOfButton4Props === String(data?.answer)) {
      index[0] = 1;
      index[1] = 2;
      index[2] = 3;
      index[3] = 0;

      description[0] = String(data?.descriptionChoice4);
      description[1] = String(data?.descriptionChoice1);
      description[2] = String(data?.descriptionChoice2);
      description[3] = String(data?.descriptionChoice3);

      buttonName[0] = String(data?.choice4);
      buttonName[1] = String(data?.choice1);
      buttonName[2] = String(data?.choice2);
      buttonName[3] = String(data?.choice3);
    }

    return null;
  };

  return (
    <main>
      <Header />
      <div className='flex justify-end mr-[1.5rem]'>
        <div className='bg-resultDiv w-[10rem] rounded-[2rem] h-[3rem] flex justify-center'>
          <p className="text-3xl p-[0.4rem] items-end">Score: {score}</p>
        </div>
      </div>
      <p className="text-3xl text-center">Question {questionProps}:</p>
      <Picture src={srcProps} alt={altProps} description={descriptionOfQuestionProps} />

      {chooseDescription()} {/* Use chooseDescription to display */}
      <div className="flex bg-white-500 flex justify-center gap-6">
        <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props), index[0])} />
        <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])} />
        <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])} />
        <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])} />

        <ModalComponents
          nameOfModal="It's True"
          chocieOfModal={buttonName[0]}
          color='#CDEACC'
          detailOfModal={description[0]}
          state={modalTrueIsOpen}
          setModal={setModalTrueIsOpen}
          question={questionProps}
        />

        <ModalComponents
          nameOfModal="It's False"
          chocieOfModal={buttonName[1]}
          color='#EBD8D8'
          detailOfModal={description[1]}
          state={modalFalseIsOpen}
          setModal={setModalFalseIsOpen}
          question={questionProps}
        />

        <ModalComponents
          nameOfModal="It's False"
          chocieOfModal={buttonName[2]}
          color='#EBD8D8'
          detailOfModal={description[2]}
          state={modalFalseIsOpen2}
          setModal={setModalFalseIsOpen2}
          question={questionProps}
        />

        <ModalComponents
          nameOfModal="It's False"
          chocieOfModal={buttonName[3]}
          color='#EBD8D8'
          detailOfModal={description[3]}
          state={modalFalseIsOpen3}
          setModal={setModalFalseIsOpen3}
          question={questionProps}
        />
      </div>
      <br className="word-break: break-all" />
      {questionProps === 1 && <div className="flex bg-white-500 h-[6.45rem]"></div>}

      {questionProps >= 2 && (
        <div>
          <div className='flex ml-[1.5rem]'>
            <Button name="Previous" fnOnClick={() => router.push(`/question${questionProps - 1}`)} />
          </div>
          <div className="flex bg-white-500 h-[4.05rem]"></div>
        </div>
      )}
    </main>
  );
}

export default CardGame;
