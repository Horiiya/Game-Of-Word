// import React, { useState, useEffect } from 'react';
// import Picture from './Picture';
// import Header from './Header';
// import Button from './Button';
// import ModalComponents from './Modal';
// import Data from '../Data.json';
// import { useRouter } from 'next/navigation';

// interface CardGameProps {
//   questionProps: number;
//   srcProps: string;
//   altProps: string;
//   nameOfButton1Props: string;
//   nameOfButton2Props: string;
//   nameOfButton3Props: string;
//   nameOfButton4Props: string;
//   descriptionProps: string;
// }

// export function CardGame({
//   questionProps,
//   srcProps,
//   altProps,
//   nameOfButton1Props,
//   nameOfButton2Props,
//   nameOfButton3Props,
//   nameOfButton4Props,
//   descriptionProps
// }: CardGameProps) {
//   const [score, setScore] = useState<number>(() => {
//     const storedScore = localStorage.getItem('score');
//     return storedScore ? parseInt(storedScore, 10) : 0;
//   });

//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
//   const [answerOnce, setAnswerOnce] = useState<boolean>(false);
//   const [answerAlready, setAnswerAlready] = useState<boolean>(false);

//   useEffect(() => {
//     localStorage.setItem('score', score.toString());
//   }, [score]);

//   const handleButtonClick = (isCorrect: boolean) => {
//     if (isCorrect) {
//       if (answerAlready === false && answerOnce === false) {
//         const newScore: number = score + 1;
//         setScore(newScore);
//         setAnswerAlready(true);
//         setAnswerOnce(true);
//       }
//       setModalTrueIsOpen(true);
//     } else {
//       setAnswerOnce(true);
//       setModalFalseIsOpen(true);
//     }
//   };

//   const filteredData = Data.filter((post) => post.id === questionProps);
//   const post = filteredData[0];

//   const checkChoice = (choiceTest: string) => {
//     return choiceTest === post.answer;
//   };

//   return (
//     <main>
//       <Header />

//       <div className='flex justify-end mr-[1.5rem]'>
//       <div className='bg-resultDiv w-[10rem] rounded-[2rem] h-[3rem] flex justify-center'>
//         <p className="text-3xl p-[0.4rem] items-end">Score: {score}</p>
//       </div>
//       </div>
//       <p className="text-3xl text-center">Question {questionProps}:</p>
//       <Picture src={srcProps} alt={altProps} description={descriptionProps} />
//       <div className="flex bg-white-500 flex justify-center gap-6">
//         <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props))} />
//         <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props))} />
//         <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props))} />
//         <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props))} />

//         <ModalComponents
//           nameOfModal="It's True"
//           state={modalTrueIsOpen}
//           setModal={setModalTrueIsOpen}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False"
//           state={modalFalseIsOpen}
//           setModal={setModalFalseIsOpen}
//           score={score}
//           question={questionProps}
//         />
//       </div>
//       <br className="word-break: break-all" />
//       <div className="flex bg-white-500 h-[5.8rem]"></div>


//     </main>
//   );
// }

// export default CardGame;











// import React, { useState, useEffect } from 'react';
// import Picture from './Picture';
// import Header from './Header';
// import Button from './Button';
// import ModalComponents from './Modal';
// import Data from '../Data.json';
// import { useRouter } from 'next/navigation';

// interface CardGameProps {
//   questionProps: number;
//   srcProps: string;
//   altProps: string;
//   nameOfButton1Props: string;
//   nameOfButton2Props: string;
//   nameOfButton3Props: string;
//   nameOfButton4Props: string;
//   descriptionProps: string;
// }

// export function CardGame({
//   questionProps,
//   srcProps,
//   altProps,
//   nameOfButton1Props,
//   nameOfButton2Props,
//   nameOfButton3Props,
//   nameOfButton4Props,
//   descriptionProps
// }: CardGameProps) {
//   const [score, setScore] = useState<number>(() => {
//     const storedScore = localStorage.getItem('score');
//     return storedScore ? parseInt(storedScore, 10) : 0;
//   });

//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
//   const [answerOnce, setAnswerOnce] = useState<boolean>(false);
//   const [answerAlready, setAnswerAlready] = useState<boolean>(false);

//   useEffect(() => {
//     localStorage.setItem('score', score.toString());
//   }, [score]);

//   const handleButtonClick = (isCorrect: boolean) => {
//     if (isCorrect) {
//       if (answerAlready === false && answerOnce === false) {
//         const newScore: number = score + 1;
//         setScore(newScore);
//         setAnswerAlready(true);
//         setAnswerOnce(true);
//       }
//       setModalTrueIsOpen(true);
//     } else {
//       setAnswerOnce(true);
//       setModalFalseIsOpen(true);
//     }
//   };

//   const filteredData = Data.filter((post) => post.id === questionProps);
//   const post = filteredData[0];

//   const checkChoice = (choiceTest: string) => {
//     return choiceTest === post.answer;
//   };

//   return (
//     <main>
//       <Header />

//       <div className='flex justify-end mr-[1.5rem]'>
//       <div className='bg-resultDiv w-[10rem] rounded-[2rem] h-[3rem] flex justify-center'>
//         <p className="text-3xl p-[0.4rem] items-end">Score: {score}</p>
//       </div>
//       </div>
//       <p className="text-3xl text-center">Question {questionProps}:</p>
//       <Picture src={srcProps} alt={altProps} description={descriptionProps} />
//       <div className="flex bg-white-500 flex justify-center gap-6">
//         <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props))} />
//         <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props))} />
//         <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props))} />
//         <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props))} />

//         <ModalComponents
//           nameOfModal="It's True"
//           state={modalTrueIsOpen}
//           setModal={setModalTrueIsOpen}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False"
//           state={modalFalseIsOpen}
//           setModal={setModalFalseIsOpen}
//           score={score}
//           question={questionProps}
//         />
//       </div>
//       <br className="word-break: break-all" />
//       <div className="flex bg-white-500 h-[5.8rem]"></div>



//       {/* <Button
//         name="Next Question"
//         fnOnClick={() => {
//             setTimeout(() => {
//               router.push(`/result`)
//             }, 500); // รอ 1 วินาทีก่อนที่จะ redirect
//             }
//           } 
//       /> */}



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

interface CardGameProps {
  questionProps: number;
  srcProps: string;
  altProps: string;
  nameOfButton1Props: string;
  nameOfButton2Props: string;
  nameOfButton3Props: string;
  nameOfButton4Props: string;
  descriptionProps: string;
}

export function CardGame({
  questionProps,
  srcProps,
  altProps,
  nameOfButton1Props,
  nameOfButton2Props,
  nameOfButton3Props,
  nameOfButton4Props,
  descriptionProps
}: CardGameProps) {
  const localStorageKey = 'answeredQuestions';
  const initialAnsweredQuestions = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>(initialAnsweredQuestions);
  const [score, setScore] = useState<number>(() => {
    const storedScore = localStorage.getItem('score');
    return storedScore ? parseInt(storedScore, 10) : 0;
  });

  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  const handleButtonClick = (isCorrect: boolean) => {
    if (isCorrect) {
      if (!answeredQuestions.includes(questionProps)) {
        const newScore: number = score + 1;
        setScore(newScore);
        const updatedQuestions = [...answeredQuestions, questionProps];
        setAnsweredQuestions(updatedQuestions);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));
      }
      setModalTrueIsOpen(true);
    } else {
      setModalFalseIsOpen(true);
    }
  };

  const filteredData = Data.filter((post) => post.id === questionProps);
  const post = filteredData[0];

  const checkChoice = (choiceTest: string) => {
    return choiceTest === post.answer;
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
      <Picture src={srcProps} alt={altProps} description={descriptionProps} />
      <div className="flex bg-white-500 flex justify-center gap-6">
        <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props))} />
        <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props))} />
        <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props))} />
        <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props))} />

        <ModalComponents
          nameOfModal="It's True"
          state={modalTrueIsOpen}
          setModal={setModalTrueIsOpen}
          score={score}
          question={questionProps}
        />
        <ModalComponents
          nameOfModal="It's False"
          state={modalFalseIsOpen}
          setModal={setModalFalseIsOpen}
          score={score}
          question={questionProps}
        />
      </div>
      <br className="word-break: break-all" />
      <div className="flex bg-white-500 h-[5.8rem]"></div>
    </main>
  );
}

export default CardGame;



