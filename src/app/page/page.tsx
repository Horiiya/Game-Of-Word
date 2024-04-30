// import Link from 'next/link';

// export default function Page() {
 
//   return (
//     <div>
//       <Link href="/page2">This is page 22</Link>
//     </div>
//   )
// }


import Link from 'next/link';
import React from 'react';

export default function Page({ searchParams } : {
  searchParams : {
    score : number;
  };
}) {
  console.log(searchParams.score)
 
  return (
    <div>
      <Link href="/page2">This is page of page</Link>
    </div>
  )
}