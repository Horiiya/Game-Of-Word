// import React from 'react';
// import ReactModal from 'react-modal';
// import Button from "./Button";
// import { useRouter } from 'next/navigation';

// interface ModalProps {
//   chocieOfModal: string;
//   nameOfModal: string;
//   detailOfModal: string;
//   state: boolean;
//   setModal: React.Dispatch<React.SetStateAction<boolean>>;
//   question: number;
//   color: string;
// }

// export function ModalComponents({ nameOfModal, detailOfModal, state, setModal, question, color, chocieOfModal }: ModalProps) {
//   const router = useRouter();
  
//   const closeModalFalse = () => {
//     setModal(false);
//   };

//   return (
//     <ReactModal
//       isOpen={state}
//       onRequestClose={closeModalFalse}
//       ariaHideApp={false}
//       style={{
//         overlay: {
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         },
//         content: {
//           top: '50%',
//           left: '50%',
//           right: 'auto',
//           width: '500px', 
//           height: '325px',
//           bottom: 'auto',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//           border: 'none',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           borderRadius: '8px',
//           padding: '20px',
//           backgroundColor: color,
//         },
//       }}
//     >
//     <h2 className="text-blueText text-center text-2xl">{chocieOfModal}</h2>
//     <div className="flex h-[1rem]"></div>
//     <div className="px-0 border-b-4 border-borderLine w-[28.7rem] justify-self-start"></div>
//     <div className="flex h-[1rem]"></div>
//     <h2 className="text-blueText text-center text-2xl">{nameOfModal}</h2>
//     <h1 className="text-center text-blueText text-2xl">{detailOfModal}</h1>
//     <div className="bg-white-500 flex justify-center items-center absolute inset-x-10 bottom-4">

//     <Button
//         name="Next Question"
//         fnOnClick={() => {
//           if(question + 1 === 11) {
//             setTimeout(() => {
//               router.push(`/result`)
//             }, 500); 
//           }

//           else {
//             setTimeout(() => {
//               router.push(`/question/${question + 1}?`)
//             }, 500);
//           }
//             }
//         } 
//       />
//     </div>  
    
//     </ReactModal>
//   );
// }

// export default ModalComponents; 





import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import Button from "./Button";
import { useRouter } from 'next/navigation';

interface ModalProps {
  chocieOfModal: string;
  nameOfModal: string;
  detailOfModal: string;
  state: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  question: number;
  color: string;
}

interface DataItem {
  id: number;
  src: Text;
  alt: Text;
  question: Text;
  answer: Text;
  choice1: Text;
  choice2: Text;
  choice3: Text;
  choice4: Text;
  descriptionChoice1: Text;
  descriptionChoice2: Text;
  descriptionChoice3: Text;
  descriptionChoice4: Text;
}

export function ModalComponents({ nameOfModal, detailOfModal, state, setModal, question, color, chocieOfModal }: ModalProps) {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {

    const fetchData = async () => {
      
      const res = await fetch('/api/mysqlfeed');
      const result: DataItem[] = await res.json();
      // console.log('Fetched data:', result);
      const filteredData = result.find((item: DataItem) => item.id);
      setDataCount(result.length);
      // console.log('Src is: ', String(data?.src));
      
    };
    fetchData();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

   
  }, []);

  const closeModalFalse = () => {
    setModal(false);
  };

  const getModalStyle = () => {
    if (windowWidth <= 320) {
      return {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '300px',
        height: '300px',
        padding: '10px',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: color,
      };
    }
    return {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '500px',
      height: '325px',
      transform: 'translate(-50%, -50%)',
      border: '2px solid black',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: color,
      overflow: 'hidden'
    };
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
        content: getModalStyle(),
      }}
    >
      {/* <img className="w-[40px] h-[40x]" src={'/ImageOfWord/checked.png'} alt="" /> */}
      <h2 className="text-blueText text-center text-2xl">{chocieOfModal}</h2>
      <div className="flex h-[1rem]"></div>
      <div className="px-0 border-b-4 border-borderLine w-[28.7rem] justify-self-start max-[320px]:w-[280px]"></div>
      <div className="flex h-[1rem]"></div>
      <h2 className="text-blueText text-center text-2xl">{nameOfModal}</h2>
      <h1 className="text-center text-blueText text-2xl">{detailOfModal}</h1>
      <div className="bg-white-500 flex justify-center items-center absolute inset-x-10 bottom-4">
        {/* <Button
          name="Next Question"
          fnOnClick={() => {
            if (question + 1 === Number(dataCount+1)) {
              setTimeout(() => {
                router.push(`/result`);
              }, 500);
            } else {
              setTimeout(() => {
                router.push(`/question/${question + 1}?`);
              }, 500);
            }
          }}
        /> */}

        <button className='bg-white shadow-[inset_0_0_0_2px_#687bab] text-black
        px-3 py-2.5 rounded-full tracking-widest uppercase 
        font-bold hover:bg-[#86a0e3] 
        hover:text-white dark:text-neutral-200 
        transition duration-200'
        onClick={() => {
          if (question + 1 === Number(dataCount+1)) {
            setTimeout(() => {
              router.push(`/result`);
            }, 500);
          } else {
            setTimeout(() => {
              router.push(`/question/${question + 1}?`);
            }, 500);
          }
        }}
        >
        
        Next Question

        </button>



      </div>
    </ReactModal>
  );
}

export default ModalComponents;

