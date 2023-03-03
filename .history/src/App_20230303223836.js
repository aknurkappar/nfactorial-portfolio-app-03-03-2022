import './App.css';
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Line } from "./components/Line"
import { About } from "./components/About"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Line />
    <Header />
    <Header />

    </>
  );
}

export default App;
