import "./RecipeList.css";
import { projectFirestore } from "../firebase/config";
import deleteIcon from "../assets/delete_icon.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <span>{recipe.method.substring(0, 75)}...</span>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          <img
            src={deleteIcon}
            alt="Delete Icon"
            className="delete"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
