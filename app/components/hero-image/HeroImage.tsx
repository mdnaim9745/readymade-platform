import React from "react";
import styles from "./HeroImage.module.scss";

interface heroBannerProps {
  imageUrl: string;
  altText: string;
}

const HeroImage = ({ imageUrl, altText }: heroBannerProps) => {
  return (
    <div className={styles.heroBanner}>
      <img src={imageUrl} alt={altText} className={styles.heroBanner__image} />
    </div>
  );
};

export default HeroImage;
