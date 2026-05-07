import React, { useEffect, useState } from "react";
import RecipesList from "../../components/RecipesList";
import "./Home.css";
import { projectFirestore } from "../../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { Recipe } from "../../types";

function Home() {
  const [data, setData] = useState<Recipe[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const ref = collection(projectFirestore, "recipes");

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.empty) {
          setIsPending(false);
          setError("No recipes to load");
          setData([]);
        } else {
          const results: Recipe[] = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...(doc.data() as Omit<Recipe, "id">), id: doc.id });
          });

          setData(results);
          setIsPending(false);
          setError(null);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipesList recipes={data} />}
    </div>
  );
}

export default Home;
