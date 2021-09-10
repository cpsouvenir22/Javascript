
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropCard from './components/PropCard.jsx';
import Archer from "./assets/images/Archer.jpeg";
import Lana from "./assets/images/Lana.jpeg";
import Cheryl from "./assets/images/Cheryl.jpeg";
import Pam from "./assets/images/Pam.png";

function App() {

  

  return (
    <div className="d-flex flex-wrap justify-content-evenly align-content-center">
      <PropCard 
        firstName="Sterling" 
        lastName= "Archer"
        age= {40}
        hairColor= "Black"
        img={Archer}
      />

      <PropCard 
        firstName="Lana" 
        lastName= "Kane"
        age= {36}
        hairColor= "Black"
        img={Lana}
      />

      <PropCard 
        firstName="Pam" 
        lastName= "Poovey"
        age= {43}
        hairColor= "Blonde"
        img={Pam}
      />

      <PropCard 
        firstName="Cheryl" 
        lastName= "Tunt"
        age= {32}
        hairColor= "Red"
        img={Cheryl}
      />
      
    </div>
  );
}

export default App;
