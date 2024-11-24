import { CiHome } from "react-icons/ci";

function App() {
  return (
    <div className="bg-secondary text-text">
      <div className="flex justify-between">
        <div>
          <CiHome className="text-primary" /> Home
        </div>
        <div>13th May 2025</div>
        <div><Menu /></div>
      </div>
    </div>
  );
}

export default App;