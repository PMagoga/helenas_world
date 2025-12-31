import { skins } from "../data/data.js";
import Card from "./Card.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="mood-board">
      {skins.map((skin) => (
        <div className="mood-board-item" key={skin.id}>
          <Card
            image={skin.image}
            name={skin.name}
            skill={skin.skill}
            speed={skin.speed}
            stealth={skin.stealth}
            extracao={skin.extracao}
            vida={skin.vida}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
