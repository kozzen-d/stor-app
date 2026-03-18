import { useEffect, useState } from "react";
import type Category from "../../types/Category";
import { CategoryCard } from "../CategoryCard";
import s from "./CategoriesList.module.css";

interface CategoriesListProps {
  updateList?: boolean;
}

export default function CategoriesList({ updateList }: CategoriesListProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories");
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, [updateList]);

  return (
    <ul className={s.userList}>
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </ul>
  );
}
