'use client';
import { useState } from "react";
import { Wheel } from 'react-custom-roulette'

export default function Roulette () {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const data = [
    { option: 'clavier',
      image : 
      {
        uri :'/images/keyboard.png',
        sizeMultiplier : 0.5,
        landscape : true,  
      },
   },
    { 
      option: 'batterie',
      image : 
      {
        uri :'/images/drum.png',
        sizeMultiplier : 0.5,
        landscape : true,  
      },
     },
    { 
      option: 'guitar',
      image : 
      {
        uri :'/images/electric-guitar.png',
        sizeMultiplier : 0.5,
        landscape : true,  
      },
    },
    { 
      option: 'Triangle',
      image : 
      {
        uri :'/images/triangle.png',
        sizeMultiplier : 0.5,
        landscape : true,  
      },
     },
    { 
      option: 'Bass',
      image : 
      {
        uri :'/images/bass-guitar.png',
        sizeMultiplier : 0.5,
        landscape : true,  
      },
     },
    { 
      option: 'Vocals',
      image : 
      {
        uri :'/images/microphone.png',
        sizeMultiplier : 0.5,
        landscape : true,  
      },
     },
  ]
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#002579", "#3A55B4"]}
        pointerProps={{
          src: "/images/pointer.png",
        }}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-full w-40 border-4 border-black "
        onClick={handleSpinClick}
      >
        SPIN
      </button>
    </>
  );
};