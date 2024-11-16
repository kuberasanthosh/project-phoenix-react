import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstButton from "./pages/FirstButton";
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
          <Route path="firstbutton" element={<FirstButton price="10" style='{"width": "10%", "textAlign": "center", "fontSize": "1.3em"}' />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<NoPage />} />
        </>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
