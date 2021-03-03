import DieuHuongURL from '../router/DieuHuongURL';
import './../css/App.css';
import Footer from './Footer';
import Nav from './Nav';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div >
      <Nav/>
      <DieuHuongURL/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
