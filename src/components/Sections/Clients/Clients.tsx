import Section from "@/components/Section/Section";
import { clients } from "@/data/data";

function Clients() {
    return (
        <Section
            className="clients"
            title="Gracias a quienes confian en nosotros"
            description={["Algunas de las empresas con las que trabajamos a lo largo de estos años."]}
        >
            <div className="clients__logos">
                {clients.map((item) => (
                    <img key={item.name} src={item.image} alt={item.name} />
                ))}
            </div>
        </Section>
    );
}

export default Clients;
