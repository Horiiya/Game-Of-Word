import React, { useState } from 'react';
import Picture from './Picture';
import Header from './Header';
import Button from './Button';
import ModalComponents from './Modal';
import Data from '../Data.json';

interface CardGameProps {
  scoreProps: number;
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
  scoreProps,
  questionProps,
  srcProps,
  altProps,
  nameOfButton1Props,
  nameOfButton2Props,
  nameOfButton3Props,
  nameOfButton4Props,
  descriptionProps
}: CardGameProps) {
  const [score, setScore] = useState<number>(scoreProps);
  const [modalTrueIsOpen, setModalTrueIsOpen] = useState<boolean>(false);
  const [modalFalseIsOpen, setModalFalseIsOpen] = useState<boolean>(false);
  const [answerAlready, setAnswerAlready] = useState<boolean>(false);
  // const [numberOfClick, setNumberOfClick] = useState<number>(0);

  const handleButtonClick = (isCorrect: boolean) => {
    // const newNumberOfClick = numberOfClick + 1;
    // setNumberOfClick(newNumberOfClick);
    if (isCorrect) {

      if (answerAlready == false) {
        const newScore = score + 1;
        setScore(newScore);
        setAnswerAlready(true)
      }
      setModalTrueIsOpen(true);
      
    } else {
      setModalFalseIsOpen(true);
    }
  };

  const filteredData = Data.filter((post) => post.id === questionProps);

  const post = filteredData[0];

  const checkChoice = (choiceTest: string) => {
    return (
      choiceTest === post.answer
    )
  }
  
  return (
    <main>
      <Header />
      <p></p>
      <p className="text-3xl text-end">Score: {score}</p>
      <p className="text-3xl">Question {questionProps}:</p>
      <Picture src={srcProps} alt={altProps} description={descriptionProps}/>
      <div className="flex bg-white-500 flex justify-center gap-6">
        <Button name={nameOfButton1Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton1Props))} />
        <Button name={nameOfButton2Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton2Props))} />
        <Button name={nameOfButton3Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton3Props))} />
        <Button name={nameOfButton4Props} fnOnClick={() => handleButtonClick(checkChoice(nameOfButton4Props))} />

        <ModalComponents
          nameOfModal="It's True"
          state={modalTrueIsOpen}
          setTest={setModalTrueIsOpen}
          scoreTest={score}
          question={questionProps}
        />
        <ModalComponents
          nameOfModal="It's False"
          state={modalFalseIsOpen}
          setTest={setModalFalseIsOpen}
          scoreTest={score}
          question={questionProps}
        />
      </div>
      <br className="word-break: break-all" />
      <div className="flex bg-white-500 h-24">
        <p>;=;</p>
      </div>
    </main>
  );
}

export default CardGame;

