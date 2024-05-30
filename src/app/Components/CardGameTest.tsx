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
//   descriptionProps,
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
//       const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
//         setAnsweredQuestions(updatedQuestions);
//         localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

//         const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
//         setAnsweredOnce(updatedAnswerOnce);
//         localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

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

//   const filteredData = Data.filter((post) => post.id === questionProps);
//   const post = filteredData[0];
//   const index = new Array(4);
//   const description = new Array(4)


//   const checkChoice = (choiceTest: string) => {
//     return choiceTest === post.answer;
//   };

//   const chooseDescription = () => {
  
//     if (nameOfButton1Props === post.answer ) {
//       index[0] = 0;
//       index[1] = 1;
//       index[2] = 2;
//       index[3] = 3;
  
//       description[0] = post.descriptionChoice1;
//       description[1] = post.descriptionChoice2;
//       description[2] = post.descriptionChoice3;
//       description[3] = post.descriptionChoice4;
//     }

//     else if (nameOfButton2Props === post.answer) {
//       index[0] = 1;
//       index[1] = 0;
//       index[2] = 2;
//       index[3] = 3;

//       description[0] = post.descriptionChoice2;
//       description[1] = post.descriptionChoice1;
//       description[2] = post.descriptionChoice3;
//       description[3] = post.descriptionChoice4;
//     }

//     else if (nameOfButton3Props === post.answer) {
//       index[0] = 1;
//       index[1] = 2;
//       index[2] = 0;
//       index[3] = 3;

//       description[0] = post.descriptionChoice3;
//       description[1] = post.descriptionChoice1;
//       description[2] = post.descriptionChoice2;
//       description[3] = post.descriptionChoice4;
//     }

//     else if (nameOfButton4Props === post.answer) {
//       index[0] = 1;
//       index[1] = 2;
//       index[2] = 3;
//       index[3] = 0;

//       description[0] = post.descriptionChoice4;
//       description[1] = post.descriptionChoice1;
//       description[2] = post.descriptionChoice2;
//       description[3] = post.descriptionChoice3;
//     }

//     return null;
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
//       {chooseDescription()} {/* ใช้ chooseDescription และแสดงผล */}
//       <div className="flex bg-white-500 flex justify-center gap-6">
//         <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props), index[0])} />
//         <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])} />
//         <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])} />
//         <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])} />
  
//         <ModalComponents
//           nameOfModal="It's True"
//           detailOfModal={description[0]}
//           state={modalTrueIsOpen}
//           setModal={setModalTrueIsOpen}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False"
//           detailOfModal={description[1]}
//           state={modalFalseIsOpen}
//           setModal={setModalFalseIsOpen}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False Test2"
//           detailOfModal={description[2]}
//           state={modalFalseIsOpen2}
//           setModal={setModalFalseIsOpen2}
//           score={score}
//           question={questionProps}
//         />
//         <ModalComponents
//           nameOfModal="It's False Test3"
//           detailOfModal={description[3]}
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
  numberOfQuestionProps: number;
  srcProps: string;
  altProps: string;
  nameOfButton1Props: string;
  nameOfButton2Props: string;
  nameOfButton3Props: string;
  nameOfButton4Props: string;
  descriptionOfQuestionProps: string;
}

export function CardGame({
  numberOfQuestionProps,
  srcProps,
  altProps,
  nameOfButton1Props,
  nameOfButton2Props,
  nameOfButton3Props,
  nameOfButton4Props,
  descriptionOfQuestionProps,
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
      if (!answeredOnce[numberOfQuestionProps] && !answeredQuestions[numberOfQuestionProps]) {
        const newScore: number = score + 1;
        setScore(newScore);
        const updatedQuestions = { ...answeredQuestions, [numberOfQuestionProps]: true };
        setAnsweredQuestions(updatedQuestions);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

        const updatedAnswerOnce = { ...answeredOnce, [numberOfQuestionProps]: true };
        setAnsweredOnce(updatedAnswerOnce);
        localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

        setModalTrueIsOpen(true);
      } else {
        setModalTrueIsOpen(true);
      }
    } else {
      // Set the name of the Modal based on the buttonIndex
      const updatedQuestions = { ...answeredQuestions, [numberOfQuestionProps]: true };
      setAnsweredQuestions(updatedQuestions);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

      const updatedAnswerOnce = { ...answeredOnce, [numberOfQuestionProps]: true };
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

  const filteredData = Data.filter((post) => post.id === numberOfQuestionProps);
  const post = filteredData[0];
  const index = [0, 1, 2, 3];
  const description = [post.descriptionChoice1, post.descriptionChoice2, post.descriptionChoice3, post.descriptionChoice4];
  const buttonName = [post.choice1, post.choice2, post.choice3, post.choice4];

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
      <p className="text-3xl text-center">Question {numberOfQuestionProps}:</p>
      <Picture src={srcProps} alt={altProps} description={descriptionOfQuestionProps} />
      <div className="flex bg-white-500 flex justify-center gap-6">
        {index.map((i) => (
          <Button key={i} name={buttonName[i]} fnOnClick={() => handleButtonClick(checkChoice(buttonName[i]), i)} />
        ))}
        {[modalFalseIsOpen, modalFalseIsOpen2, modalFalseIsOpen3].map((state, i) => (
          <ModalComponents
            key={i}
            nameOfModal="It's False"
            chocieOfModal={buttonName[i + 1]}
            color='#EBD8D8'
            detailOfModal={description[i + 1]}
            state={state}
            setModal={(value) => (i === 0 ? setModalFalseIsOpen(value) : i === 1 ? setModalFalseIsOpen2(value) : setModalFalseIsOpen3(value))}
            question={numberOfQuestionProps}
          />
        ))}
        <ModalComponents
          nameOfModal="It's True"
          chocieOfModal={buttonName[0]}
          color='#CDEACC'
          detailOfModal={description[0]}
          state={modalTrueIsOpen}
          setModal={setModalTrueIsOpen}
          question={numberOfQuestionProps}
        />
      </div>
      <br className="word-break: break-all" />
      {numberOfQuestionProps === 1 && <div className="flex bg-white-500 h-[6.45rem]"></div>}
      {numberOfQuestionProps >= 2 && (
        <div>
          <div className='flex ml-[1.5rem]'>
            <Button name="Previous" fnOnClick={() => router.push(`/question${numberOfQuestionProps - 1}?`)} />
          </div>
          <div className="flex bg-white-500 h-[4.05rem]"></div>
        </div>
      )}
    </main>
  );
}

export default CardGame;
