import React, {useState} from 'react';
import './button.css';

interface ButtonProps {
  radius?: number;
  backgroundColor?: string;
  emoji: 'clap' | 'heart' | 'wave';
}

export const Button = ({
  radius = 50,
  backgroundColor,
  emoji = 'clap'
}: ButtonProps) => {
  const [ccolor, setCcolor] = useState<string>("");
  
  function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setCcolor(randomColor);
  }
  
  return (
    <button 
      className = {[
        "text-5xl m-4 p-8 shadow-xl",
        `bg-[#${ccolor}]`,
        `rounded-[${radius}px]`,
      ].join(' ')}
      onClick={changeColor}
      >
      &#128079;
      {emoji == 'clap' ? 'slap' : 'no'}
    </button>
  );
};
