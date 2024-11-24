import { CiHome } from "react-icons/ci";
import { CgMenuRound } from "react-icons/cg";

function App() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-secondary text-text font-Parkinsans min-h-screen px-4 py-2">
      <div className="flex justify-between items-center pb-2">   
        <div className="flex items-center gap-2 text-primary">
          <CiHome className="h-7 w-7" aria-label="Home icon" />
        </div>
        <time dateTime={new Date().toISOString()} className="text-sm text-text font-medium">
          {today}
        </time>  
        <div>
          <CgMenuRound className="h-7 w-7 text-primary" aria-label="Menu icon" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Welcome to the mobile-friendly version of this application.
        </p>
      </div>
    </div>
  );
}

export default App;