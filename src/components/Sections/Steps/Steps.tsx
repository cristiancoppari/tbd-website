import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import { steps } from "@/data/data";

function Steps() {
    return (
        <Section
            className="steps"
            title="¿Cómo trabajamos?"
            description={["Solicitá información sobre el servicio que necesites."]}
        >
            <div className="stepsBox">
                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <div className="step__number">
                            <span>{step.number}</span>
                        </div>
                        <h4 className="step__title h6">{step.title}</h4>
                        <p className="step__text text-gray p">{step.text}</p>

                        <Button.Outline>{step.cta.label}</Button.Outline>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Steps;
