import { Link } from "react-router-dom";
import type Category from "../../types/Category";
import s from "./CategoryCard.module.css";

export const CategoryCard = ({ id, name, image }: Category) => {
  return (
    <li className={s.card}>
      <Link to={`/categories/${id}`} className={s.link}>
        <div className={s.container}>
          <img src={image} alt={name} className={s.image} />
          <p className={s.name}>{name}</p>
        </div>
      </Link>
    </li>
  );
};
