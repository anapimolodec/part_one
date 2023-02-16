import React, {useState} from 'react';
import './button.css';

interface ButtonProps {
  radius?: number;
  backgroundColor?: string;
  emoji: 'clap' | 'heart' | 'star';
}
const emojiStyles = {
  clap: "👏",
  heart: "💔",
  star: "🌟",
};

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
  const ButtonClass = "text-5xl m-4 p-8 shadow-xl bg-gray-400 ";

  return (
    <button 
      className = {ButtonClass}
      style = {{backgroundColor, borderRadius: radius}}
      >
      {emojiStyles[emoji]}
    </button>
  );
};
