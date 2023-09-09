import { IconCellphone } from "@/components/Icons";
import { IconEmail } from "@/components/Icons";
import { IconLinkedin } from "@/components/Icons";
import { IconPhone } from "@/components/Icons";
import { IconClock } from "@/components/Icons";

export const headerUpEls = [
    {
        action: "https://www.linkedin.com/company/bestdrivers/",
        label: null,
        icon: <IconLinkedin />,
    },
    {
        action: "+541153530000",
        label: "+54 11 5353 0000",
        icon: <IconPhone />,
    },
    {
        action: "08003452300",
        label: "0800 345 2300",
        icon: <IconCellphone />,
    },
    {
        action: "reservas@bestdrivers.com.ar",
        label: "reservas@bestdrivers.com.ar",
        icon: <IconEmail />,
    },
    {
        action: null,
        label: "Atencion Personalizada de 07:00 a 23:00 hs",
        icon: <IconClock />,
    },
];

export const navbarEls = [
    {
        label: "Inicio",
        url: "/",
        subMenu: null,
    },
    {
        label: "Servicios",
        url: "/servicios",
        subMenu: null,
    },
    {
        label: "Nuestra flota",
        url: "/nuestra-flota",
        subMenu: [
            {
                label: "Auto sedan remis",
                url: "/nuestra-flota/auto-sedan-remis",
            },
            {
                label: "Alta gama",
                url: "/nuestra-flota/alta-gama",
            },
            {
                label: "Mini vans",
                url: "/nuestra-flota/mini-vans",
            },
            {
                label: "Vans y minibus",
                url: "/nuestra-flota/vans-minibus",
            },
            {
                label: "Blindados",
                url: "/nuestra-flota/blindados",
            },
        ],
    },
    {
        label: "Nosotros",
        url: "/nosotros",
        subMenu: null,
    },
    {
        label: "App",
        url: "/contacto",
        subMenu: null,
    },
    {
        label: "Contacto",
        url: "/contacto",
        subMenu: null,
    },
];

export const heroCards = [
    {
        title: "Traslados Corporativos",
        text: "Servicio empresarial. Remises ejecutivos para empresas.",
        image: "/images/best-drivers-traslados-corporativos.jpeg",
        imagePosition: null,
    },
    {
        title: "Traslados para grupos",
        text: "Traslados en VANs y MiniVans.",
        image: "/images/best-drivers-traslados-grupales.jpeg",
        imagePosition: null,
    },
    {
        title: "Traslados para eventos",
        text: "Cumbres, congresos, casamientos, diplomáticos.",
        image: "/images/best-drivers-eventos.jpeg",
        imagePosition: null,
    },
];
