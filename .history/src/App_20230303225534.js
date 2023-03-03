import './App.css';
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Line } from "./components/Line"
import { About } from "./components/About"
import { Routes, Route } from "react-router-dom";
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

function App() {
  return (
    <>
    <Header />
    <Line />
    <Main />
    <Line />
    <About />
    <Line />
    <Experience />
    <Line />
    <Projects

    </>
  );
}

export default App;
