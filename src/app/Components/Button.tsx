import React from 'react'

interface ButtonProps {
  name: string;
  fnOnClick?: () => void;
}


export function Button({name, fnOnClick}: ButtonProps) {
  return (
    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => {
      if (fnOnClick) {
        fnOnClick();
        
      }
    }}>
      {name}
    </button>
  )
}

export default Button;
