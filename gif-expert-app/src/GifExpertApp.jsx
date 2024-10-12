import { useState } from "react";
import { AddCategory,GifGrid } from "./components"
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const [error, setError] = useState("");
  const onAddCategory = (newCategory) => {
    const newCategoryLower = newCategory.toLowerCase();
    if (categories.map((cat) => cat.toLowerCase()).includes(newCategoryLower)) {
      setError("Error de nombre repetido");
      return;
    }
    setCategories([newCategory, ...categories]);
    setError("");
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <p style={{ color: "red" }}>{error}</p>
      {categories.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};
