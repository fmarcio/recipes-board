import React from "react";
import "./RecipesList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import TrashCan from "../assets/delete-icon.svg";
import { projectFirestore } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { Recipe } from "../types";

interface RecipesListProps {
  recipes: Recipe[];
}

export default function RecipesList({ recipes }: RecipesListProps) {
  const { mode } = useTheme();

  if (!recipes.length) {
    return <div className="error">No recipes found</div>;
  }

  const handleClick = (id: string) => {
    const docRef = doc(projectFirestore, "recipes", id);
    deleteDoc(docRef);
  };

  return (
    <div className={`recipe-list ${mode}`}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          {/* .substring() returns only a part of the text */}
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          <img
            alt="delete icon"
            className="delete"
            src={TrashCan}
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
