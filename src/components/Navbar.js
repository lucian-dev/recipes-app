import "./Navbar.css";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Recipes App</h1>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
