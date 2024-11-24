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
          13 <sup>the</sup> May 2025
        </div>  
        <div>
          <CgMenuRound className="h-7 w-7 text-primary" aria-label="Menu icon" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg text-text">
          Happy Birthday Babe !!💜🥰🥳🎉
        </h2>
      </div>
    </div>
  );
}

export default App;