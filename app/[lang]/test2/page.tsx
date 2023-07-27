import HeroImage from "../../../components/hero-image/HeroImage";
import CardItem from "../../../components/card-item/CardItem";
import CardData from "../../../../public/CardData.json";
import styles from "./page.module.scss";
import ImageText from "../../../components/image-text/ImageText";
import VerticalNavigation from "../../../components/vertical-navigation/VerticalNavigation";
import Link from "next/link";

export default function Test({ params: { lang } }: any) {
  return (
    <main>
      <h1>
        {process.env.language === "en" ? "this is the test page" : "DEUTSCH"}
      </h1>
      <Link href={`/${lang}`}>TO HOME</Link>
      <HeroImage
        imageUrl="/heroImage.png"
        altText="HeroImage should be appeared here"
      />
      <h1> just putting it here for some space</h1>

      <div className={styles.card}>
        {CardData.map((card, index) => (
          <CardItem
            key={index}
            src={card.src}
            texts={card.texts}
            headline={card.headline}
            linkText={card.linkText}
            href={card.href}
          />
        ))}
      </div>

      <ImageText
        src="https://placeponi.es/400/400"
        headline="This is headline"
        texts="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium, consequuntur dolorem ratione facilis vero modi neque nam repellat dolores."
      />

      <VerticalNavigation />
    </main>
  );
}
