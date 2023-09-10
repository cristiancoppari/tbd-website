import Section from "@/components/Section/Section";

import appImage from "/public/images/bestdrivers-app.png";

function MobileApp() {
    return (
        <Section
            className="mobileApp"
            title="Optimizamos tu tiempo con nuestra App"
            cta={{
                label: "Conocer App",
                href: "/",
            }}
            description={[
                "Contamos con una App exclusiva para todos nuestros clientes, para que puedas auto-gestionar tus propios servicios y ver el viaje en tiempo real. Disponible para iPhone y Android.",
            ]}
        >
            <img src={appImage.src} alt="Best Drivers - App" />
        </Section>
    );
}

export default MobileApp;
