import React, { useEffect, useState } from "react";
import "./Recipe.css";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import ClockIcon from "../../assets/clock-icon.svg";
import { Recipe as RecipeType } from "../../types";

function Recipe() {
  const { id } = useParams<{ id: string }>();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState<Omit<RecipeType, "id"> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (!id) return;
    setIsPending(true);

    const docRef = doc(projectFirestore, "recipes", id);

    const unsub = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        setIsPending(false);
        setRecipe(snapshot.data() as Omit<RecipeType, "id">);
        setError(null);
      } else {
        setIsPending(false);
        setError("This recipe does not exist");
      }
    }, (err) => {
      setIsPending(false);
      setError(err.message);
    });

    return () => unsub();
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>
            <img className="clock" alt="clock-icon" src={ClockIcon} />
            {recipe.cookingTime} to cook
          </p>

          <p className="ings">Ingredients:</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}

      <Link className="go-to-home" to="/">
        Back to home
      </Link>
    </div>
  );
}

export default Recipe;
