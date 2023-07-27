import React from "react";
import styles from "./HeroBanner.module.scss";
import HeroImage from "../hero-image/HeroImage";

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroBanner__image}>
        <HeroImage
          imageUrl="/heroImage.png"
          altText="HeroImage should be appeared here"
        />
      </div>

      <div className={styles.heroBanner__texts}>
        <h1>blah blah</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          repellendus est quam eos quisquam quidem reiciendis aliquam voluptas
          natus, ea quo repellat architecto porro, impedit labore velit
          reprehenderit cupiditate nam.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
