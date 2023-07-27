import styles from "./page.module.scss";
import VerticalNavigation from "../../components/vertical-navigation/VerticalNavigation";
import FullWidthImage from "../../components/full-width-image/FullWidthImage";

export default function Sandbox() {
  return (
    <main>
      <h1 className={styles["vertical-navigation__headline"]}>Learning</h1>

      <div className={styles.sandbox}>
        <div className={styles.sandbox__verticalNavigation}>
          <VerticalNavigation />
        </div>

        <div className={styles.sandbox__contents}>
          <h1 className={styles["sandbox__contents--headline"]}>
            {process.env.language === "en"
              ? "this is the test page"
              : "DEUTSCH"}
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            cupiditate, minus voluptate libero perferendis consequuntur
            inventore earum. Voluptatem, molestiae eligendi harum et culpa,
            debitis neque, in molestias impedit sit sint architecto suscipit
            eius. Similique possimus temporibus tenetur iure autem deserunt
            nesciunt, obcaecati hic ut voluptas iusto quasi porro aut neque.
          </p>
          <FullWidthImage
            imageUrl="https://tinyurl.com/bdfm6msv"
            altText="A full width image"
          />
        </div>
      </div>
    </main>
  );
}
