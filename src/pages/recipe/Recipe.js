import "./Recipe.css";
import { projectFirestore } from "../../firebase/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc);
        if (doc.exists) {
          setIsLoading(false);
          setRecipe(doc.data());
        } else {
          setIsLoading(false);
          setError("Not find the recipe");
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
