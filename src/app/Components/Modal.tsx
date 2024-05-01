import React from 'react';
import ReactModal from 'react-modal';
import ButtonTrue from "./Button";
import { useRouter } from 'next/navigation';

interface ModalProps {
  nameOfModal: string;
  state: boolean;
  setTest: React.Dispatch<React.SetStateAction<boolean>>;
  scoreTest: number;
}

export function ModalComponents({ nameOfModal, state, setTest, scoreTest }: ModalProps) {

  const router = useRouter();

  const openModalFalse = () => {
    setTest(true);
  };

  const closeModalFalse = () => {
    setTest(false);
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
    <h2 className="text-blue-500">{nameOfModal}</h2>
    <ButtonTrue
        name="Next Question"
        fnOnClick={() => {
          setTimeout(() => {
            router.push(`/page2?score=${scoreTest}`)
          }, 1000); // รอ 1 วินาทีก่อนที่จะ redirect
          
        }}
      />
    
    </ReactModal>
  );
}

export default ModalComponents; 