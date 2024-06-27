// 'use client'
// import React, { useState, useEffect } from 'react';
// import Data from '../Data.json';

// export default function Result() {
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     const storedScore = localStorage.getItem('score');
//     if (storedScore) {
//       setScore(parseInt(storedScore, 10));
//     }
//   }, []);

//   const filteredData = Data.filter((post) => post.id === 10);
//   const post = filteredData[0];

//   return (
//     <main>
//       <div className="flex bg-white-500 h-[9.5rem]"></div>
//       <div className='flex justify-center'>
//         <div className="items-center bg-resultDiv w-[35rem] h-[25rem] rounded-[1rem]">
//           <div className="flex bg-white-500 h-[1.5rem]"></div>
//           <p className='text-center text-4xl'>Summarize of score</p>
//           <div className="flex h-[1.5rem]"></div>
//           <div className="border-b-4 border-borderDiv w-[35rem]"></div>
//           <div className="flex h-[1.7rem]"></div>
//           <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3'>Total Number Of Question {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {Data.length}</p>
//           <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3'>Number Of Correct Question {'\u00A0\u00A0\u00A0'} : {score}</p>

//         <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3'>Number Of InCorrect Question {'\u00A0'}: {Data.length - score}</p>
//         <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3'>Number of score as percent {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {(score / Data.length) * 100}%</p>
//         </div>
//       </div>


//       <div className="flex bg-white-500 h-[8.9rem]"></div>
//     </main>
//   );
// }







// 'use client'
// import React, { useState, useEffect } from 'react';
// import Data from '../DataTest.json';

// export default function Result() {
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     const storedScore = localStorage.getItem('score');
//     if (storedScore) {
//       setScore(parseInt(storedScore, 10));
//     }
//   }, []);

  

//   return (
//     <main>
//       <div className="flex bg-white-500 h-[9.5rem] max-[320px]:h-[30px]"></div>
//       <div className='flex justify-center'>
//         <div className="items-center bg-resultDiv w-[35rem] h-[25rem] rounded-[1rem] max-[320px]:w-[290px] max-[320px]:h-[525px]">

//           <div className="flex bg-white-500 h-[1.5rem] max-[320px]:w-[290px]"></div>
//           <p className='text-center text-4xl max-[320px]:text-[25px]'>Summarize of score</p>
//           <div className="flex h-[1.5rem] max-[320px]:w-[290px]"></div>
//           <div className="border-b-4 border-borderDiv w-[35rem] max-[320px]:w-[290px]"></div>
//           <div className="flex h-[1.7rem]"></div>
//           {/* <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Total Number Of Question {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {Data.length}</p> */}

//           <div className='flex flex-col'> 

//           <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Total Number Of Question {'\u00A0\u00A0\u00A0\u00A0\u00A0'}: {Data.length}</p>

//           <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number Of Correct Question {'\u00A0\u00A0\u00A0'} : {score}</p>
//           <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number Of InCorrect Question {'\u00A0'}: {Data.length - score}</p>
//           <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number of score as percent {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {(score / Data.length) * 100}%</p>
          
//           </div>

//         </div>
//       </div>
//       <div className="flex bg-white-500 h-[8.9rem] max-[320px]:h-[34.5px]"></div>
//     </main>
//   );
// }



'use client'
import React, { useState, useEffect } from 'react';
import Data from '../DataTest.json';

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

export default function Result() {
  const [score, setScore] = useState(0);
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }

    const fetchData = async () => {
      
      const res = await fetch('/api/mysqlfeed');
      const result: DataItem[] = await res.json();
      // console.log('Fetched data:', result);
      const filteredData = result.find((item: DataItem) => item.id);
      setDataCount(result.length);
      // console.log('Src is: ', String(data?.src));
      
    };
    fetchData();

  }, []);


  

  return (
    <main>
      <div className="flex bg-white-500 h-[9.5rem] max-[320px]:h-[30px]"></div>
      <div className='flex justify-center'>
        <div className="items-center bg-resultDiv w-[35rem] h-[25rem] rounded-[1rem] max-[320px]:w-[290px] max-[320px]:h-[525px]">

          <div className="flex bg-white-500 h-[1.5rem] max-[320px]:w-[290px]"></div>
          <p className='text-center text-4xl max-[320px]:text-[25px]'>Summarize of score</p>
          <div className="flex h-[1.5rem] max-[320px]:w-[290px]"></div>
          <div className="border-b-4 border-borderDiv w-[35rem] max-[320px]:w-[290px]"></div>
          <div className="flex h-[1.7rem]"></div>
          {/* <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Total Number Of Question {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {Data.length}</p> */}

          <div className='flex flex-col'> 

          {/* <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Total Number Of Question {'\u00A0\u00A0\u00A0\u00A0\u00A0'}: {Data.length}</p>

          <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number Of Correct Question {'\u00A0\u00A0\u00A0'} : {score}</p>
          <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number Of InCorrect Question {'\u00A0'}: {Data.length - score}</p>
          <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number of score as percent {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}: {(score / Data.length) * 100}%</p> */}
          
          <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Total Number Of Question : {dataCount}</p>

          <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number Of Correct Question : {score}</p>
          <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number Of InCorrect Question : {dataCount - score}</p>
          <p className='border-b-[0.1rem] text-2xl ml-[4rem] mr-[3.5rem] py-3 max-[320px]:text-[15px]'>Number of score as percent {''}: {(dataCount ? (score / dataCount) * 100 : 0).toFixed(2)}%</p>


          </div>

        </div>
      </div>
      <div className="flex bg-white-500 h-[8.9rem] max-[320px]:h-[34.5px]"></div>
    </main>
  );
}
