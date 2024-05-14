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

  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  const handleButtonClick = (isCorrect: boolean) => {

    if (isCorrect) {
      if(!answeredOnce[questionProps] && !answeredQuestions[questionProps]) {
        const newScore: number = score + 1;
        setScore(newScore);
        const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
        setAnsweredQuestions(updatedQuestions);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

        const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
        setAnsweredOnce(updatedAnswerOnce);
        localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));

        setModalTrueIsOpen(true);
      }
      else {
        setModalTrueIsOpen(true);
      }
      
  } 

    // Answer wrong
    else {
        const updatedQuestions = { ...answeredQuestions, [questionProps]: true };
        setAnsweredQuestions(updatedQuestions);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedQuestions));

        const updatedAnswerOnce = { ...answeredOnce, [questionProps]: true };
        setAnsweredOnce(updatedAnswerOnce);
        localStorage.setItem('answeredOnce', JSON.stringify(updatedAnswerOnce));
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

      {questionProps === 1 ? (
        <div className='flex justify-end p-[2.7rem]'>
      </div>
      ) : null}

      
      {questionProps >= 2 && (
        <div className='flex justify-start p-[1.5rem]'>
          <Button name="Previous" fnOnClick={() => router.push(`/question${questionProps - 1}?`)} />
        </div>
       )}
      
      <div className="flex bg-white-500 h-[0.8rem]"></div>
      
    </main>
  );
}

export default CardGame;
