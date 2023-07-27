import Link from "next/link";
import styles from "./Navigation.module.scss";

export default function Navigation({ lang }: { lang: string }) {
  const navigation = [
    { route: "platform", title: "Ready Platform" },
    { route: "business-processes", title: "Business Processes" },
    { route: "sap-structure", title: "Structure" },
    { route: "learning", title: "Learning" },
    { route: "support", title: "Support" },
    { route: "sap-system", title: "System" },
  ];

  return (
    <div className={styles.navigation}>
      {navigation.map(({ route, title }, index) => (
        <Link
          key={index}
          href={`/${lang}/${route}`}
          className={styles.navigation__items}
        >
          {title}
        </Link>
      ))}
    </div>
  );
}
