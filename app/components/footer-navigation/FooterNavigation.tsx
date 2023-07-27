import Link from "next/link";
import styles from "./FooterNavigation.module.scss";

interface FooterNavigation {
  headline: string;
  links: NavigationLink[];
}

interface NavigationLink {
  route: string;
  title: string;
}

export default function FooterNavigation({
  headline,
  links,
}: FooterNavigation) {
  return (
    <nav className={styles.contact}>
      <h2 className={styles.contact__headline}>{headline}</h2>
      {links.map(({ route, title }, key) => (
        <Link href={route} key={key} className={styles.contact__items}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
