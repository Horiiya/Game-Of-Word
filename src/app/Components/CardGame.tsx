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
//   detailOfChoice: string;
// }


// export function CardGame({
//   questionProps,
//   srcProps,
//   altProps,
//   nameOfButton1Props,
//   nameOfButton2Props,
//   nameOfButton3Props,
//   nameOfButton4Props,
//   descriptionProps,
//   detailOfChoice
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

//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);

//   useEffect(() => {
//     localStorage.setItem('score', score.toString());
//   }, [score]);

//   const handleButtonClick = (isCorrect: boolean) => {
   

//     if (isCorrect) {
//       if(!answeredOnce[questionProps] && !answeredQuestions[questionProps]) {
//         const newScore: number = score + 1;
//         setScore(newScore);
//         const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
//         setAnsweredQuestions(updatedQuestions);
//         localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

//         const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
//         setAnsweredOnce(updatedAnswerOnce);
//         localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

//         setModalTrueIsOpen(true);
//       }
//       else {
//         setModalTrueIsOpen(true);
//       }
      
//   } 

//     // Answer wrong
//     else {
//         const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
//         setAnsweredQuestions(updatedQuestions);
//         localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

//         const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
//         setAnsweredOnce(updatedAnswerOnce);
//         localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));
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
//         <div className='bg-resultDiv w-[10rem] rounded-[2rem] h-[3rem] flex justify-center'>
//           <p className="text-3xl p-[0.4rem] items-end">Score: {score}</p>
//         </div>
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
//           detailOfModal={detailOfChoice}
//           state={modalTrueIsOpen}
//           setModal={setModalTrueIsOpen}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False"
//           detailOfModal={detailOfChoice}
//           state={modalFalseIsOpen}
//           setModal={setModalFalseIsOpen}
//           score={score}
//           question={questionProps}
//         />
//       </div>
//       <br className="word-break: break-all" />
//       <div className="flex bg-white-500 h-[5.8rem]"></div>

//       {questionProps >= 2 && (
//       <Button name="Previous" fnOnClick={() => router.push('/question2')} />
//       )}

      
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
//   detailOfChoice1: string;
//   detailOfChoice2: string;
//   detailOfChoice3: string;
//   detailOfChoice4: string;
// }


// export function CardGame({
//   questionProps,
//   srcProps,
//   altProps,
//   nameOfButton1Props,
//   nameOfButton2Props,
//   nameOfButton3Props,
//   nameOfButton4Props,
//   descriptionProps,
//   detailOfChoice1,
//   detailOfChoice2,
//   detailOfChoice3,
//   detailOfChoice4
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

//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen2, setModalFalseIsOpen2] = useState<boolean>(false);
//   const [modalFalseIsOpen3, setModalFalseIsOpen3] = useState<boolean>(false);

//   useEffect(() => {
//     localStorage.setItem('score', score.toString());
//   }, [score]);

//   const handleButtonClick = (isCorrect: boolean) => {
   
//     if (isCorrect) {
//       if(!answeredOnce[questionProps] && !answeredQuestions[questionProps]) {
//         const newScore: number = score + 1;
//         setScore(newScore);
//         const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
//         setAnsweredQuestions(updatedQuestions);
//         localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

//         const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
//         setAnsweredOnce(updatedAnswerOnce);
//         localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

//         setModalTrueIsOpen(true);
//       }
//       else {
//         setModalTrueIsOpen(true);
//       }
      
//   } 

//     // Answer wrong
//     else if (checkChoice(nameOfButton1Props) === false){
//         const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
//         setAnsweredQuestions(updatedQuestions);
//         localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

//         const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
//         setAnsweredOnce(updatedAnswerOnce);
//         localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));
//       setModalFalseIsOpen2(true);
//     }

//     else if (checkChoice(nameOfButton2Props) === false){
//       const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
//       setAnsweredQuestions(updatedQuestions);
//       localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

//       const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
//       setAnsweredOnce(updatedAnswerOnce);
//       localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));
//     setModalFalseIsOpen3(true);
//   }
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
//         <div className='bg-resultDiv w-[10rem] rounded-[2rem] h-[3rem] flex justify-center'>
//           <p className="text-3xl p-[0.4rem] items-end">Score: {score}</p>
//         </div>
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
//           detailOfModal={detailOfChoice1}
//           state={modalTrueIsOpen}
//           setModal={setModalTrueIsOpen}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False1"
//           detailOfModal={detailOfChoice2}
//           state={modalFalseIsOpen}
//           setModal={setModalFalseIsOpen}
//           score={score}
//           question={questionProps}
//         />

//         <ModalComponents
//           nameOfModal="It's False Test2"
//           detailOfModal={detailOfChoice3}
//           state={modalFalseIsOpen3}
//           setModal={setModalFalseIsOpen3}
//           score={score}
//           question={questionProps}
//         />

//         <ModalComponents
//           nameOfModal="It's False Test3"
//           detailOfModal={detailOfChoice3}
//           state={modalFalseIsOpen3}
//           setModal={setModalFalseIsOpen3}
//           score={score}
//           question={questionProps}
//         />

//       </div>
//       <br className="word-break: break-all" />
//       <div className="flex bg-white-500 h-[5.8rem]"></div>

//       {questionProps >= 2 && (
//       <Button name="Previous" fnOnClick={() => router.push('/question2')} />
//       )}

      
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
//   detailOfChoice1: string;
//   detailOfChoice2: string;
//   detailOfChoice3: string;
//   detailOfChoice4: string;
// }

// export function CardGame({
//   questionProps,
//   srcProps,
//   altProps,
//   nameOfButton1Props,
//   nameOfButton2Props,
//   nameOfButton3Props,
//   nameOfButton4Props,
//   descriptionProps,
//   detailOfChoice1,
//   detailOfChoice2,
//   detailOfChoice3,
//   detailOfChoice4
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

//   const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
//   const [modalFalseIsOpen2, setModalFalseIsOpen2] = useState<boolean>(false);
//   const [modalFalseIsOpen3, setModalFalseIsOpen3] = useState<boolean>(false);

//   useEffect(() => {
//     localStorage.setItem('score', score.toString());
//   }, [score]);

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
//       switch (buttonIndex) {
//         case 0:
//           setModalFalseIsOpen(true);
//           break;
//         case 1:
//           setModalFalseIsOpen2(true);
//           break;
//         case 2:
//           setModalFalseIsOpen3(true);
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   const filteredData = Data.filter((post) => post.id === questionProps);
//   const post = filteredData[0];
//   const index = [0, 1, 2, 3];

//   const checkChoice = (choiceTest: string) => {
//     return choiceTest === post.answer;
//   };

//   return (
//     <main>
//       <Header />
//       <div className='flex justify-end mr-[1.5rem]'>
//         <div className='bg-resultDiv w-[10rem] rounded-[2rem] h-[3rem] flex justify-center'>
//           <p className="text-3xl p-[0.4rem] items-end">Score: {score}</p>
//         </div>
//       </div>
//       <p className="text-3xl text-center">Question {questionProps}:</p>
//       <Picture src={srcProps} alt={altProps} description={descriptionProps} />
//       <div className="flex bg-white-500 flex justify-center gap-6">
//         <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props), index[0])} />
//         <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])} />
//         <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])} />
//         <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])} />

//         <ModalComponents
//           nameOfModal="It's True"
//           detailOfModal={detailOfChoice1}
//           state={modalTrueIsOpen}
//           setModal={setModalTrueIsOpen}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False"
//           detailOfModal={detailOfChoice2}
//           state={modalFalseIsOpen}
//           setModal={setModalFalseIsOpen}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False Test2"
//           detailOfModal={detailOfChoice3}
//           state={modalFalseIsOpen2}
//           setModal={setModalFalseIsOpen2}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False Test3"
//           detailOfModal={detailOfChoice4}
//           state={modalFalseIsOpen3}
//           setModal={setModalFalseIsOpen3}
//           score={score}
//           question={questionProps}
//         />
//       </div>
//       <br className="word-break: break-all" />
//       <div className="flex bg-white-500 h-[5.8rem]"></div>

//       {questionProps >= 2 && <Button name="Previous" fnOnClick={() => router.push('/question2')} />}
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
  descriptionProps,
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

  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen2, setModalFalseIsOpen2] = useState<boolean>(false);
  const [modalFalseIsOpen3, setModalFalseIsOpen3] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

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
      // ตั้งชื่อ Modal ตามตำแหน่งของปุ่มที่ผิด
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

  const filteredData = Data.filter((post) => post.id === questionProps);
  const post = filteredData[0];
  const index = new Array(4);
  const description = new Array(4)
  const buttonName = new Array(4)


  const checkChoice = (choiceTest: string) => {
    return choiceTest === post.answer;
  };

  const chooseDescription = () => {
  
    if (nameOfButton1Props === post.answer ) {
      index[0] = 0;
      index[1] = 1;
      index[2] = 2;
      index[3] = 3;
  
      description[0] = post.descriptionChoice1;
      description[1] = post.descriptionChoice2;
      description[2] = post.descriptionChoice3;
      description[3] = post.descriptionChoice4;

      buttonName[0] = post.choice1
      buttonName[1] = post.choice2
      buttonName[2] = post.choice3
      buttonName[3] = post.choice4
    }

    else if (nameOfButton2Props === post.answer) {
      index[0] = 1;
      index[1] = 0;
      index[2] = 2;
      index[3] = 3;

      description[0] = post.descriptionChoice2;
      description[1] = post.descriptionChoice1;
      description[2] = post.descriptionChoice3;
      description[3] = post.descriptionChoice4;

      buttonName[0] = post.choice2
      buttonName[1] = post.choice1
      buttonName[2] = post.choice3
      buttonName[3] = post.choice4
    }

    else if (nameOfButton3Props === post.answer) {
      index[0] = 1;
      index[1] = 2;
      index[2] = 0;
      index[3] = 3;

      description[0] = post.descriptionChoice3;
      description[1] = post.descriptionChoice1;
      description[2] = post.descriptionChoice2;
      description[3] = post.descriptionChoice4;

      buttonName[0] = post.choice3
      buttonName[1] = post.choice1
      buttonName[2] = post.choice2
      buttonName[3] = post.choice4
    }

    else if (nameOfButton4Props === post.answer) {
      index[0] = 1;
      index[1] = 2;
      index[2] = 3;
      index[3] = 0;

      description[0] = post.descriptionChoice4;
      description[1] = post.descriptionChoice1;
      description[2] = post.descriptionChoice2;
      description[3] = post.descriptionChoice3;

      buttonName[0] = post.choice4
      buttonName[1] = post.choice1
      buttonName[2] = post.choice2
      buttonName[3] = post.choice3
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
      <Picture src={srcProps} alt={altProps} description={descriptionProps} />
      {chooseDescription()} {/* ใช้ chooseDescription และแสดงผล */}
      <div className="flex bg-white-500 flex justify-center gap-6">
        <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props), index[0])} />
        <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])} />
        <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])} />
        <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])} />
  
        <ModalComponents
          nameOfModal="It's True"
          // nameOfModal={buttonName[0] + "<br />It's True"}
          chocieOfModal={buttonName[0]}
          color='#CDEACC'
          detailOfModal={description[0]}
          state={modalTrueIsOpen}
          setModal={setModalTrueIsOpen}
          score={score}
          question={questionProps}
        />
        <ModalComponents
          nameOfModal="It's False"
          chocieOfModal={buttonName[1]}
          color='#EBD8D8'
          detailOfModal={description[1]}
          state={modalFalseIsOpen}
          setModal={setModalFalseIsOpen}
          score={score}
          question={questionProps}
        />
        <ModalComponents
          nameOfModal="It's False"
          chocieOfModal={buttonName[2]}
          color='#EBD8D8'
          detailOfModal={description[2]}
          state={modalFalseIsOpen2}
          setModal={setModalFalseIsOpen2}
          score={score}
          question={questionProps}
        />
        <ModalComponents
          nameOfModal="It's False"
          chocieOfModal={buttonName[3]}
          color='#EBD8D8'
          detailOfModal={description[3]}
          state={modalFalseIsOpen3}
          setModal={setModalFalseIsOpen3}
          score={score}
          question={questionProps}
        />

      </div>
      <br className="word-break: break-all" />
      {/* <div className="flex bg-white-500 h-[4.7rem]"></div> */}
      {questionProps === 1 && <div className="flex bg-white-500 h-[4.7rem]"></div>}

      {questionProps >= 2 && (
        <div>
          <div className='flex ml-[1.5rem]'>
            <Button name="Previous" fnOnClick={() => router.push(`/question${questionProps - 1}?`)} />
          </div>
          <div className="flex bg-white-500 h-[2.3rem]"></div>
        </div>
      )}
      {/* {questionProps >= 2 && <Button name="Previous" fnOnClick={() => router.push(`/question${questionProps - 1}?`)} />
      } */}
    </main>
  );
  
}

export default CardGame;
