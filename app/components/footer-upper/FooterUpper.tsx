import React from "react";
import styles from "./FooterUpper.module.scss";
import IconsLibrary from "../icons/IconsLibrary";
import cn from "classnames";
import Image from "next/image";

import worldmap from "../../../public/worldmap.svg";

const FooterUpper = ({ className = "" }) => {
  return (
    <div className={cn(styles.footerUpper, className)}>
      <Image
        src={worldmap}
        alt="worldmap image"
        className={styles.footerUpper__image}
      />
      <div className={styles.footerUpper__texts}>
        <h1 className={styles.footerUpper__headline}>Sample Headline</h1>
        <p className={styles.footerUpper__subline}>Beyond S/4Hana</p>
      </div>

      <div className={styles.footerUpper__icons}>
        <a href="https://twitter.com/kps_aghq">
          <IconsLibrary symbol="twitter" size="34px" fill="white" />
        </a>
        <a href="#">
          <IconsLibrary symbol="tiktok" size="34px" fill="white" />
        </a>
        <a href="https://de-de.facebook.com/kpsag/">
          <IconsLibrary symbol="facebook" size="34px" fill="white" />
        </a>
        <a href="#">
          <IconsLibrary symbol="instagram" size="34px" fill="white" />
        </a>
      </div>
      <div className={styles.footerUpper__seperator}></div>
    </div>
  );
};

export default FooterUpper;
