import ImageTextCta from "@/components/Cards/ImageTextCta/ImageTextCta";
import { heroCards } from "@/data/data";

function ThreeCards() {
    return (
        <section className="threeCards wrapper">
            {heroCards.map((card) => {
                const props = {
                    title: card.title,
                    text: card.text,
                    image: card.image,
                };

                return (
                    <ImageTextCta key={card.title} {...props}>
                        <ImageTextCta.Cta>Ver más</ImageTextCta.Cta>
                    </ImageTextCta>
                );
            })}
        </section>
    );
}

export default ThreeCards;
