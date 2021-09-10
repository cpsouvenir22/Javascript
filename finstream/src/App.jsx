
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from '@reach/router';
import Main from './Views/Main';
import News from './Views/News';
import Crypto from './Views/Crypto';
import Chat from './Views/Chat'



function App() {
 

  return (
    <div className="App">
      <div id = "headline" className="headline text-center text-white font-weight-bolder">
        <h1>STOCK STREAM</h1>
        <div className= "d-flex justify-content-around">
          <Link className="btn btn-success" to= {"/"}>Home</Link>
          <Link className="btn btn-success" to= {"/news"}>News</Link>
          <Link className="btn btn-success" to= {"/crypto"}>Cryptocurrency</Link>
          <Link className="btn btn-success" to= {"/chat"}>Chat</Link>


      </div>
      </div>

      
      
      <Router>
        <Main path = "/" />
        <News path = "/news" />
        <Crypto path = "/crypto" />
        <Chat path = "/chat" />


      </Router>
      
    </div>
  );
}



export default App;
