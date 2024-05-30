import React from 'react'

interface ButtonProps {
  name: string;
  fnOnClick?: () => void;
}

export function Button({name, fnOnClick}: ButtonProps) {
  return (
    <button className="bg-blueOfButton hover:bg-hoverOfButton text-white font-bold py-2 px-4 rounded-full flex"
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
