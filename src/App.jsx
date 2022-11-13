import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Place from "./pages/Place";
import Footer from "./pages/Footer";
import TopNav from "./components/TopNav";

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-clip">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
