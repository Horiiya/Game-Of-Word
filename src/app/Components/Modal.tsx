import React from 'react';
import ReactModal from 'react-modal';
import Button from "./Button";
import { useRouter } from 'next/navigation';

interface ModalProps {
  nameOfModal: string;
  state: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  question: number;
}

export function ModalComponents({ nameOfModal, state, setModal, score, question }: ModalProps) {
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
          height: '300px',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '20px',
        },
      }}
    >
    <h2 className="text-blue-500 text-center text-2xl">{nameOfModal}</h2>
    <div className="bg-white-500 flex justify-center items-end h-56">
    <Button
        name="Next Question"
        fnOnClick={() => {
          if(question + 1 === 11) {
            setTimeout(() => {
              router.push(`/result`)
            }, 500); // รอ 1 วินาทีก่อนที่จะ redirect
          }
          else {
            setTimeout(() => {
              router.push(`/question${question + 1}?`)
            }, 500); // รอ 1 วินาทีก่อนที่จะ redirect
          }}
          } 
        //   setTimeout(() => {
        //     router.push(`/question${question + 1}?`)
        //   }, 500); // รอ 1 วินาทีก่อนที่จะ redirect
        // }}
      />
    </div>  
    
    </ReactModal>
  );
}

export default ModalComponents; 