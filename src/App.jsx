import { CiHome } from "react-icons/ci";
import { CgMenuRound } from "react-icons/cg";

function App() {

  return (
    <div className="bg-secondary text-text font-Parkinsans min-h-screen px-4 py-2">
      <div className="flex justify-between items-center pb-2">   
        <div className="flex items-center gap-2 text-primary">
          <CiHome className="h-7 w-7" aria-label="Home icon" />
        </div>
        <div className="text-sm text-text font-medium">
          13 <sup>th</sup> May 2025
        </div>  
        <div>
          <CgMenuRound className="h-7 w-7 text-primary" aria-label="Menu icon" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl text-text uppercase">
          Happy Birthday Babe !!💜🥰🥳🎉
        </h2>

<p className=" text-text text-sm">Happy Birthday, my love! 🥳💜🎉🎉

Today is all about celebrating the incredible person you are—kind, beautiful, and my greatest blessing. I’m so grateful for every moment we share, and I can’t wait to create more unforgettable memories with you.

May this year bring you all the happiness, love, and success you deserve. I’m so lucky to call you mine. Have the most amazing day—you deserve nothing less.

I love you endlessly. 💜💜
</p>
      </div>
    </div>
  );
}

export default App;