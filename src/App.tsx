import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonTypes from "./pages/ButtonTypes";
import Counter from "./pages/Counter";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <>
          <Route index element={<Home />} />
          <Route path="buttontypes" element={<ButtonTypes btnName="Prop Button" style='{"width": "200px", "textAlign": "center", "fontSize": "1.3em"}' />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<NoPage />} />
        </>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
