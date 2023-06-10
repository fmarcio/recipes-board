import React from "react";
import RecipesList from "../../components/RecipesList";
import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import "./Search.css";

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;
  const { data, error, isPending } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">Error:{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipesList recipes={data} />}
    </div>
  );
}

export default Search;
