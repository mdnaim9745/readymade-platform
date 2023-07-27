import React from "react";
import styles from "./Footer.module.scss";
import FooterUpper from "../footer-upper/FooterUpper";
import FooterNavigation from "../footer-navigation/FooterNavigation";

const contact = [
  { route: "ansprechpartner", title: "Ihr Ansprechpartner" },
  { route: "presse", title: "Presse" },
  { route: "kundenservice", title: "Kundenservice" },
];

const legal = [
  { route: "datenschutz", title: "Datenschutz" },
  { route: "https://www.kps.com/global/en/imprint.html", title: "Impressum" },
  { route: "agb", title: "AGB" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__constraint}>
        <FooterUpper className={styles.footer__upper} />
        <div className={styles.footer__navigation}>
          <FooterNavigation headline="KONTAKT" links={contact} />
          <FooterNavigation headline="LEGAL" links={legal} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
