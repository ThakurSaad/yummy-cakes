import "./App.css";
import Answers from "./components/Answers/Answers";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <h1 className="main-heading">Yummy Cakes</h1>
      <h2 className="main-sub-heading">Choose Randomly</h2>
      <Shop></Shop>
      <Answers></Answers>
    </div>
  );
}

export default App;
