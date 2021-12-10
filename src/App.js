import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Create from "./pages/create/Create";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
