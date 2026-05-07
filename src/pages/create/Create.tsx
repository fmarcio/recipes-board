import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { projectFirestore } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const navigate = useNavigate();

  const ingredientInput = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const docBody = {
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients,
    };

    try {
      await addDoc(collection(projectFirestore, "recipes"), docBody);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredient("");
    ingredientInput.current?.focus();
  };

  return (
    <div className="create">
      <h2>Add a new recipe:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </label>

        <p>
          Current ingredients:{" "}
          {ingredients.map((ing) => (
            <em key={ing}>{ing + ", "}</em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time:</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Create;
