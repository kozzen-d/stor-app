import type { FC } from "react";
import styles from "./Book.module.css"

interface BookProps {
  title: string;
  author: string;
  year: number;
  avatar: string;
}

export const Book: FC<BookProps> = ({ title, author, year, avatar}) => {
  return (
    <div className={styles.book}>
      <h2>Название: {title}</h2>
      <p>Автор: {author}</p>
      <p>Год: {year}</p>
       <img src={avatar} alt="User profile" />
    </div>
  );
};

 
