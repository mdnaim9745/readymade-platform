import styles from "./page.module.scss";

export default function SAPStructure() {
  return (
    <main>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1mAfD51rXdJ07IqwhUKXxh9k7qp2XX0zQ&ehbc=2E312F"
        className={styles.map}
        width="640"
        height="480"
      ></iframe>
    </main>
  );
}
