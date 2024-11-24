import { CiHome } from "react-icons/ci";
import { CgMenuRound } from "react-icons/cg";

function App() {
  return (
    <div className="bg-secondary text-text font-Parkinsans min-h-screen px-4 py-2">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        
        <div className="flex items-center gap-2 text-primary">
          <CiHome className="h-6 w-6" />
          <span className="text-base font-medium">Home</span>
        </div>

        
        <div className="text-sm text-gray-600 font-medium">
          13th May 2025
        </div>

        
        <div>
          <CgMenuRound className="h-6 w-6 text-primary" />
        </div>
      </div>

     
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Welcome to the mobile-friendly version of this application.
        </p>
      </div>
    </div>
  );
}

export default App;