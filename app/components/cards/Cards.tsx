import React from "react";
import CardItem, { CardItemProps } from "../card-item/CardItem";
import styles from "./Cards.module.scss";

export interface CardsProps {
  cards: CardItemProps[];
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <div className={styles.card}>
      {cards.map((card, index) => (
        <CardItem
          key={index}
          src={card.src}
          texts={card.texts}
          headline={card.headline}
          linkText={card.linkText}
          href={card.href}
        />
      ))}
    </div>
  );
};

export default Cards;
