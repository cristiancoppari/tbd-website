import PageLayout from "@/components/PageLayout/PageLayout";
import HeroForm from "@/components/Heros/HeroForm/HeroForm";
import Button from "@/components/Button/Button";

const metadata = {
    title: "Best Drivers - Remises y Traslados Ejecutivos",
    description: "Agencia de remises ejecutivos con mas de 20 años de experiencia.",
};

export default function Home() {
    return (
        <PageLayout {...metadata}>
            <HeroForm />
            <Button.Primary>hola</Button.Primary>
        </PageLayout>
    );
}
