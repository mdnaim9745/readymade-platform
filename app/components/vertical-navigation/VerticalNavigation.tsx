"use client";
import Link from "next/link";
import styles from "./VerticalNavigation.module.scss";
import React, { useState } from "react";

const VerticalNavigation = () => {
  const [activePage, setActivePage] = useState("signavio"); // State to track the active page

  const navigation = [
    { route: "signavio", title: "Signavio" },
    { route: "sandbox", title: "Enable Now" },
    { route: "confluence", title: "Confluence" },
  ];

  const handleNavigationClick = (route: string) => {
    setActivePage(route);
  };

  return (
    <div className={styles["vertical-navigation"]}>
      {navigation.map(({ route, title }) => (
        <Link
          href={route}
          key={route}
          onClick={() => handleNavigationClick(route)}
          className={`${styles["vertical-navigation__item"]} ${
            activePage === route
              ? styles["vertical-navigation__item--active"]
              : ""
          }`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default VerticalNavigation;
