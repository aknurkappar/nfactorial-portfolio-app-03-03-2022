import './App.css';
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Line } from "./components/Line"
import { About } from "./components/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationType, AbortedDeferredError} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Line />
      <Routes>

        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        {/* <Line />


        <About />
        <Line /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
