"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import Navigation from "../navigation/Navigation";
import Button from "../button/Button";
import LanguageDropdown from "../language-dropdown/LanguageDropdown";
import { TRANSLATION_CONTEXT } from "../../utils/translate";
import useLocale from "../../utils/useLocale";
import Image from "next/image";

const Header = ({ lang }: { lang: string }) => {
  const { t } = useLocale(TRANSLATION_CONTEXT.HEADER);
  return (
    <header className={styles.header}>
      <div className={`${styles.header__content} constraint`}>
        <Link href={`/${lang}`} className={styles["header__logo-container"]}>
          <img
            src="/logo.svg"
            alt="KPS Instant platform"
            className={styles.header__logo}
          />
        </Link>
        <Navigation lang={lang} />
        <Button size="medium">{t("sap-system")}</Button>
        <LanguageDropdown />
      </div>
    </header>
  );
};

export default Header;
