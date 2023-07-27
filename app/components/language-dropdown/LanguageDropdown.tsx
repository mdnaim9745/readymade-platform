"use client";
import React, { useState } from "react";
import styles from "./LanguageDropdown.module.scss";
import IconsLibrary from "../icons/IconsLibrary";
import { usePathname } from "next/navigation";

const LanguageDropdown = () => {
  const pathName = usePathname();
  const path_de = pathName.indexOf("/de");
  const path_en = pathName.indexOf("/en");
  const language_value = path_de > 1 ? "DE" : "EN";

  const [selectedLanguage, setSelectedLanguage] = useState(language_value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (e: any) => {
    setSelectedLanguage(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles["language-selector"]} onClick={toggleDropdown}>
      <IconsLibrary symbol="world" fill="white" />
      <div
        className={`${styles["language-selector__dropdown"]} ${
          isDropdownOpen ? styles["language-selector__dropdown--open"] : ""
        }`}
      >
        <span>{selectedLanguage}</span>
        <div className={styles["language-selector__options"]}>
          {path_en > 1 ? (
            <span>EN</span>
          ) : (
            <a
              href={pathName.replace("/de", "/en")}
              className={styles["language-selector__option"]}
              onClick={() => handleLanguageChange({ target: { value: "EN" } })}
            >
              EN
            </a>
          )}

          {path_de > 1 ? (
            <span>DE</span>
          ) : (
            <a
              href={pathName.replace("/en", "/de")}
              className={styles["language-selector__option"]}
              onClick={() => handleLanguageChange({ target: { value: "DE" } })}
            >
              DE
            </a>
          )}
        </div>
      </div>
      <IconsLibrary symbol="arr-down" size="10px" fill="white" />
    </div>
  );
};

export default LanguageDropdown;
