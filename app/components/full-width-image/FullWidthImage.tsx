import React from "react";
import styles from "./FullWidthImage.module.scss";

interface FullWidthImageProps {
  imageUrl: string;
  altText: string;
}

const FullWidthImage = ({ imageUrl, altText }: FullWidthImageProps) => {
  return (
    <img src={imageUrl} alt={altText} className={styles["full-width-image"]} />
  );
};

export default FullWidthImage;
