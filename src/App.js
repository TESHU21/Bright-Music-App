import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Pagelayout from "./pages/pagelayout";

function App() {
  return (
    <BrowserRouter>
      <Pagelayout />
    </BrowserRouter>
  );
}

export default App;
