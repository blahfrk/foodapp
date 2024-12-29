import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f1402130d1e34030b66242d3b2093dae";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  // Syntax of useEffect hook ---  useEffect(() => {}, [])
  // To fetch the foods in spoonacular DB
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); // await - lets the below code wait to fetch the data first before being executed
      const data = await res.json(); // await - some purpose of the above -- await --
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
