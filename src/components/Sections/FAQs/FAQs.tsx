import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import { q_and_a } from "@/data/data";

function FAQs() {
    return (
        <Section
            className="faqs"
            title="Preguntas Frecuentes"
            description={[
                "Tenemos una lista de preguntas frecuentes, esperamos que te ayuden a responder algunas de tus consultas.",
            ]}
        >
            <div className="faqs__faq">
                {q_and_a.map((item) => (
                    <div className="faq" key={item.question}>
                        <h4 className="faq__question">{item.question}</h4>
                        <p className="faq__answer p text-gray">{item.answer}</p>
                    </div>
                ))}
            </div>

            <div className="faqs__cta">
                <h4 className="title h5">¿Tenés otra consulta?</h4>
                <p className="p">Contactate con nosotros, un representante responderá todas dudas e inquietudes.</p>
                <Button.Primary>Contactanos</Button.Primary>
            </div>
        </Section>
    );
}

export default FAQs;
