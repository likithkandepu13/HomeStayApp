// import logo from './logo.svg';
// import './App.css';

import Home from "./Common/Home";
import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./NavBar/MainNavBar";
import NavBarRoots from "./NavBar/NavBarRoots";
function App() {
  return (
    <div className="App">
      {/* Home Stay App
      <Home/> */}
      <BrowserRouter>
            <MainNavBar/>
            <NavBarRoots/>
      </BrowserRouter>
    </div>
  );
}

export default App;
