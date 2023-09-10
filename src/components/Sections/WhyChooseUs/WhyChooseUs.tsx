import Section from "@/components/Section/Section";
import { whyChooseUsCards } from "@/data/data";

function WhyChooseUs() {
    return (
        <Section
            className="whyChooseUs"
            title="¿Por qué las empresas nos eligen para sus traslados ejecutivos?"
            description={[
                "Pionera en certificarse bajo las Normas de Calidad ISO 9001:2015.",
                "Más de 20 años en el mercado corporativo y turismo brindado soluciones a empresas nacionales y extranjeras.",
            ]}
        >
            <div className="iconsBox">
                {whyChooseUsCards.map((card, index) => (
                    <div key={index} className="iconBox">
                        <div className="iconBox__icon">{card.icon}</div>

                        <div className="iconBox__content">
                            <h3 className="iconBox__title h5">{card.title}</h3>
                            <p className="iconBox__text p text-gray">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default WhyChooseUs;
