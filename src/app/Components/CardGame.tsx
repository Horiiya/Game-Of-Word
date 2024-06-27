// import React, { useState, useEffect } from 'react';
// import Picture from './Picture';
// import Header from './Header';
// import Button from './Button';
// import ModalComponents from './Modal';
// import { useRouter } from 'next/navigation';

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
//   answer: string;
//   choice1: string;
//   choice2: string;
//   choice3: string;
//   choice4: string;
//   descriptionChoice1: string;
//   descriptionChoice2: string;
//   descriptionChoice3: string;
//   descriptionChoice4: string;
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
//   }, [score, questionProps]);

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
//   const description = new Array(4);
//   const buttonName = new Array(4);

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

//       buttonName[0] = String(data?.choice1);
//       buttonName[1] = String(data?.choice2);
//       buttonName[2] = String(data?.choice3);
//       buttonName[3] = String(data?.choice4);
//     } else if (nameOfButton2Props === String(data?.answer)) {
//       index[0] = 1;
//       index[1] = 0;
//       index[2] = 2;
//       index[3] = 3;

//       description[0] = String(data?.descriptionChoice2);
//       description[1] = String(data?.descriptionChoice1);
//       description[2] = String(data?.descriptionChoice3);
//       description[3] = String(data?.descriptionChoice4);

//       buttonName[0] = String(data?.choice2);
//       buttonName[1] = String(data?.choice1);
//       buttonName[2] = String(data?.choice3);
//       buttonName[3] = String(data?.choice4);
//     } else if (nameOfButton3Props === String(data?.answer)) {
//       index[0] = 1;
//       index[1] = 2;
//       index[2] = 0;
//       index[3] = 3;

//       description[0] = String(data?.descriptionChoice3);
//       description[1] = String(data?.descriptionChoice1);
//       description[2] = String(data?.descriptionChoice2);
//       description[3] = String(data?.descriptionChoice4);

//       buttonName[0] = String(data?.choice3);
//       buttonName[1] = String(data?.choice1);
//       buttonName[2] = String(data?.choice2);
//       buttonName[3] = String(data?.choice4);
//     } else if (nameOfButton4Props === String(data?.answer)) {
//       index[0] = 1;
//       index[1] = 2;
//       index[2] = 3;
//       index[3] = 0;

//       description[0] = String(data?.descriptionChoice4);
//       description[1] = String(data?.descriptionChoice1);
//       description[2] = String(data?.descriptionChoice2);
//       description[3] = String(data?.descriptionChoice3);

//       buttonName[0] = String(data?.choice4);
//       buttonName[1] = String(data?.choice1);
//       buttonName[2] = String(data?.choice2);
//       buttonName[3] = String(data?.choice3);
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
//       <Picture src={srcProps} alt={altProps} description={descriptionOfQuestionProps} />

//       {chooseDescription()} {/* Use chooseDescription to display */}
//       <div className="flex bg-white-500 flex justify-center gap-6">
//         <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props), index[0])} />
//         <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])} />
//         <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])} />
//         <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])} />

//         <ModalComponents
//           nameOfModal="It's True"
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
import { useRouter } from 'next/navigation';
import bgOfQuestion from '../bgOfQuestion.jpg'

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

  const [isHovered, setIsHovered] = useState(false);

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
    <main className=''>
      <Header />
      <div className='flex justify-end mr-[1.5rem]'>
        <div className='bg-resultDiv w-[10rem] rounded-[1.2rem] h-[3rem] flex justify-center
        max-[320px]:w-[160px] top-[25px]
        '>

          <p className="text-3xl p-[0.4rem] items-end
          
          max-[320px]:text-[23px]
          ">Score: {score}</p>
        
        </div>
      </div>

      <div className="flex bg-white-500 h-[1.5rem] max-[320px]:h-[20px]"></div>

      <p className="text-3xl text-center max-[320px]:text-[25px]">Question {questionProps}:</p>
      <Picture src={srcProps} alt={altProps} description={descriptionOfQuestionProps} />

      {chooseDescription()} {/* Use chooseDescription to display */}
      <div className="flex flex-row justify-center gap-6 max-[320px]:flex-col max-[320px]:items-center">
        {/* <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props), index[0])} />
        <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])} />
        <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])} />
        <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])} /> */}


        <button className="
        rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase 
        text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md 
        hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl 
        active:shadow-none hover:bg-purpleOfButton
        max-w-[320px] text-sm text-center
        
        "
          onClick={() => handleButtonClick(checkChoice(nameOfButton1Props), index[0])}>
          {nameOfButton1Props}
        </button>

        <button className="
        rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase 
        text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md 
        hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl 
        active:shadow-none hover:bg-purpleOfButton
        max-w-[320px] text-sm text-center
    
        "
          onClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])}>
          {nameOfButton2Props}
        </button>
        <button className="
        rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase 
        text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md 
        hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl 
        active:shadow-none hover:bg-purpleOfButton
        max-w-[320px] text-sm text-center
        
        "
          onClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])}>
          {nameOfButton3Props}
        </button>
        <button className="
        rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase 
        text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md 
        hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl 
        active:shadow-none hover:bg-purpleOfButton
        max-w-[320px] text-sm text-center


        "
          onClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])}>
          {nameOfButton4Props}
        </button>
{/* 
        <button className="rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none hover:bg-purpleOfButton"
          onClick={() => handleButtonClick(checkChoice(nameOfButton2Props), index[1])}>
          {nameOfButton2Props}
        </button>

        <button className="rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none hover:bg-purpleOfButton"
          onClick={() => handleButtonClick(checkChoice(nameOfButton3Props), index[2])}>
          {nameOfButton3Props}
        </button>

        <button className="rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none hover:bg-purpleOfButton"
          onClick={() => handleButtonClick(checkChoice(nameOfButton4Props), index[3])}>
          {nameOfButton4Props}
        </button> */}

{/* 
        <a href="#_" className="relative inline-block text-lg group"
         onClick={() => router.push(`/question/${questionProps + 1}`)}>
        
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Button Text</span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </a> */}

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
      {/* <br className="word-break: break-all" /> */}
      {/* {questionProps === 1 && <div className="flex bg-white-500 h-[0.5rem]"></div>} */}
      {/* {questionProps === 1 && <div className="flex bg-bgQuestion h-[5rem]"></div>} */}
      <div className="max-[320px]:bg-bgQuestion h-[1.5rem]"></div>

      {questionProps >= 2 && (
        <div className='max-w-[320px] '>
          <div className='flex ml-[1rem]'>
            {/* <Button name="Previous" fnOnClick={() => router.push(`/question${questionProps - 1}`)} /> */}
            
            <button className="text-blueText relative border-[3px] border-blueText bg-conclustion font-medium rounded-[20px] py-1 pl-[30px] pr-[25px] text-xl max-[320px]:text-[18px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => router.push(`/question/${questionProps - 1}`)}
            > 
              <span className="absolute left-[3px] bottom-[0px] top-[0.1px] pr-1">
                {isHovered && (
                  <img className="w-[40px] h-[40x]" src='/ImageOfWord/lessThan.png' alt="" />
                )}
              </span>
      
              <span
                style={{
                transition: 'left 0.3s ease-in-out',
                position: 'relative',
                left: isHovered ? '10px' : '0',
              }}
              >
                back
              </span>
            </button>

            
            
          </div>
        </div>
      )}

      <div className="max-[320px]:bg-bgQuestion h-[1.5rem]"></div>
    </main>
  );
}

export default CardGame;
