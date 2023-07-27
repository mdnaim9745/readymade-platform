import React from "react";
import styles from "./CardItem.module.scss";

export interface CardItemProps {
  src: string;
  headline?: string;
  texts: string;
  linkText?: string;
  href?: string;
}

const CardItem: React.FC<CardItemProps> = ({
  src,
  headline,
  texts,
  linkText,
  href,
}) => {
  return (
    <div className={styles["card-item"]}>
      <img src={src} alt="Card Image" className={styles["card-item__image"]} />
      {headline && <p className={styles["card-item__headline"]}>{headline}</p>}
      <p className={styles["card-item__text"]}>{texts}</p>
      {linkText && (
        <a className={styles["card-item__link"]} href={href}>
          {linkText}
        </a>
      )}
    </div>
  );
};

export default CardItem;
