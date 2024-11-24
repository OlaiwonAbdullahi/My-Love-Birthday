import { CiHome } from "react-icons/ci";

function App() {
  return (
    <div className="bg-secondary text-text font-">
      <div className="flex justify-between item-center">
        <div className=" flex item-center text-primary">
          <CiHome className="text-primary h-6 w-6" /> Home
        </div>
        <div>13th May 2025</div>
        <div>Menu </div>
      </div>
    </div>
  );
}

export default App;