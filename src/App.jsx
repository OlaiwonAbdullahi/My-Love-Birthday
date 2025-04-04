import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { CiHeart } from "react-icons/ci";
import { CgMenuRound } from "react-icons/cg";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-pink-100 text-pink-900 font-Poppins min-h-screen px-4 py-3 overflow-x-hidden">
      <Confetti width={windowSize.width} height={windowSize.height} />

      {/* Header */}
      <div className="flex justify-between items-center pb-2">
        <CiHeart className="h-7 w-7 text-pink-500" aria-label="Love icon" />
        <div className="text-xs text-pink-800 font-semibold">
          Just Us
        </div>
        <CgMenuRound className="h-7 w-7 text-pink-500" aria-label="Menu icon" />
      </div>

      {/* Main Love Message */}
      <div className="mt-6 text-center">
        <h2 className="text-3xl font-extrabold font-cursive text-pink-700 mb-4">
          Hey Love...
        </h2>

        <p className="text-base leading-relaxed">
          Every moment with you feels like a dream I never want to wake up from.
          <br /><br />
          Your smile is my sunshine, your voice is my favorite melody, and your heart is my home.
          <br /><br />
          This little corner of the internet is just for *you* — a place to remind you how special you are to me, always.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-4 mt-6">
        <button className="border border-pink-500 text-pink-700 px-6 py-2 rounded-full hover:bg-pink-200 transition duration-300">
          See Our Memories
        </button>
        <button className="bg-white text-pink-600 border border-pink-300 px-6 py-2 rounded-full hover:bg-pink-100 transition duration-300">
          One Surprise...
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-sm mt-10 text-pink-700">
        Made with endless love <span className="text-pink-500 ml-1">♥</span>
      </div>
    </div>
  );
}

export default App;