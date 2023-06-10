import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Create.css";
import { projectFirestore } from "../../firebase/config";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();

  const ingredientInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients,
    };

    try {
      await projectFirestore.collection("recipes").add(doc);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    // if there's an ingredient AND if it's not repeated, include it on ings array.
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2>Add a rew recipe:</h2>
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
