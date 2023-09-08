import PageLayout from "@/components/PageLayout/PageLayout";
import HeroForm from "@/components/Heros/HeroForm/HeroForm";

const metadata = {
    title: "Best Drivers - Remises y Traslados Ejecutivos",
    description: "Agencia de remises ejecutivos con mas de 20 años de experiencia.",
};

export default function Home() {
    return (
        <PageLayout {...metadata}>
            <HeroForm>
                <HeroForm.Title>Servicio de Remises Ejecutivos y Tralsados Corporativos.</HeroForm.Title>
                <HeroForm.Description>20 años de trayectoria y experiencia</HeroForm.Description>
                <HeroForm.Cta>Conocer los servicios</HeroForm.Cta>
            </HeroForm>
        </PageLayout>
    );
}
