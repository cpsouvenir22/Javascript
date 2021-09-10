
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Link} from "@reach/router";
import Main from './Views/Main';
import Create from './Views/Create';
import Show from './Views/Show';
import Edit from './Views/Edit';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <div className="d-flex col-6 mx-auto justify-content-around flex-wrap">
        <Link to="/">Home</Link>
        <Link to= "/new">Add A New Product</Link>
      </div>
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Show path= "/show/:id" />
        <Edit path= "/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
