import React from 'react';
import ReactModal from 'react-modal';
import Button from "./Button";
import { useRouter } from 'next/navigation';

interface ModalProps {
  chocieOfModal: string;
  nameOfModal: string;
  detailOfModal: string;
  state: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  question: number;
  color: string;
}

export function ModalComponents({ nameOfModal, detailOfModal, state, setModal, score, question, color, chocieOfModal }: ModalProps) {
  const router = useRouter();
  
  const closeModalFalse = () => {
    setModal(false);
  };

  return (
    <ReactModal
      isOpen={state}
      onRequestClose={closeModalFalse}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          width: '500px', 
          height: '325px',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: color,
        },
      }}
    >
    <h2 className="text-blueText text-center text-2xl">{chocieOfModal}</h2>
    {/* <div className="border-b-4 border-borderDiv w-[25rem]"></div> */}
    <div className="flex h-[1rem]"></div>
    {/* <div className="px-0 border-b-4 border-white w-[28.7rem] justify-self-start"></div> */}

    <div className="px-0 border-b-4 border-borderLine w-[28.7rem] justify-self-start"></div>


    <div className="flex h-[1rem]"></div>
    <h2 className="text-blueText text-center text-2xl">{nameOfModal}</h2>
    
    <h1 className="text-center text-blueText text-2xl">{detailOfModal}</h1>
    {/* <h1 className="text-center text-blue-500 text-2xl">{detailOfModal}</h1> */}
    {/* <div className="bg-white-500 flex justify-center items-end h-56"> */}
    {/* <div className="bg-white-500 flex justify-center items-end"> */}
    <div className="bg-white-500 flex justify-center items-center absolute inset-x-10 bottom-4">
    <Button
        name="Next Question"
        fnOnClick={() => {
          if(question + 1 === 11) {
            setTimeout(() => {
              router.push(`/result`)
            }, 500); 
          }
          else {
            setTimeout(() => {
              router.push(`/question${question + 1}?`)
            }, 500);
          }}
          } 
      />
    </div>  
    
    </ReactModal>
  );
}

export default ModalComponents; 