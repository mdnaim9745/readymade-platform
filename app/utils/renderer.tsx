import Cards from "../components/cards/Cards";
import HeroImage from "../components/hero-image/HeroImage";

export const renderComponent = (comp: any, index: number) => {
  switch (comp.type) {
    case "headline":
      return <h1 key={index}>{comp.content}</h1>;
    case "paragraph":
      return <p key={index}>{comp.content}</p>;
    case "hero-image":
      return <HeroImage key={index} altText={comp.alt} imageUrl={comp.src} />;
    case "cards":
      return <Cards key={index} cards={comp.cards} />;
  }
};
