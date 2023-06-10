import React, { useEffect, useState } from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ClockIcon from "../../assets/clock-icon.svg";

function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);

          setRecipe(doc.data());
        } else {
          setError("This recipe no exists");
        }
      });

    // cleanup function
    return () => unsub();
  }, [id]);

  /*  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "test",
    });
  }; */

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

          <p className="ingredients">Ingredients:</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          {/* <button onClick={handleClick}>update me</button> */}
        </>
      )}

      <Link className="go-to-home" to="/">
        Back to home
      </Link>
    </div>
  );
}

export default Recipe;
