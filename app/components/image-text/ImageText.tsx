import React from "react";
import styles from "./ImageText.module.scss";

interface ImageTextProps {
  src: string;
  headline?: string;
  texts: string;
}

const ImageText: React.FC<ImageTextProps> = ({ src, headline, texts }) => {
  return (
    <div className={styles["image-text"]}>
      <img
        src={src}
        alt="Image with text component"
        className={styles["image-text__image"]}
      />
      <div className={styles["image-text__body"]}>
        {headline && (
          <h2 className={styles["image-text__headline"]}>{headline}</h2>
        )}
        <p className={styles["image-text__text"]}>{texts}</p>
      </div>
    </div>
  );
};

export default ImageText;
