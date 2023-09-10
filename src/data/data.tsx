import {
    ClockIcon,
    UserIcon,
    UserGroupIcon,
    CreditCardIcon,
    DevicePhoneMobileIcon,
    TrophyIcon,
} from "@heroicons/react/24/outline";

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

export const whyChooseUsCards = [
    {
        title: "Atención Personalizada",
        text: "Todos los días de 07:00 a 23:00 hs.",
        cta: null,
        icon: <ClockIcon />,
    },
    {
        title: "Atención al cliente",
        text: "Con Personal Capacitado en Logística Integral",
        cta: null,
        icon: <UserIcon />,
    },
    {
        title: "Conductores entrenados",
        text: "Todos los Conductores poseen entrenamiento en Manejo Seguro y Predictivo con certificado vigente.",
        cta: null,
        icon: <UserGroupIcon />,
    },
    {
        title: "Múltiples Medios de Pago",
        text: "Contamos con Cuentas Corriente, Tarjetas de Crédito y otros.",
        cta: null,
        icon: <CreditCardIcon />,
    },
    {
        title: "App para smartphones",
        text: "Contamos con una App Mobile propia para que puedas realizar los pedidos desde ahi.",
        cta: null,
        icon: <DevicePhoneMobileIcon />,
    },
    {
        title: "Certificaciones",
        text: "Pionera en certificarse bajo las Normas de Calidad ISO 9001:2015.",
        cta: {
            label: "Descargar Certificado",
            url: "/",
        },
        icon: <TrophyIcon />,
    },
];

export const steps = [
    {
        number: 1,
        title: "Completá nuestro formulario",
        text: "Completá con tus datos y el servicio que estás necesitando.",
        cta: {
            label: "Ver formulario",
        },
    },
    {
        number: 2,
        title: "Reservamos tu servicio",
        text: "Procesamos la información y te contactamos para confirmar el servicio.",
        cta: {
            label: "Reservá ahora",
        },
    },
    {
        number: 3,
        title: "Disfrutá del viaje",
        text: "Nuestro conductor te estará esperando en el lugar y horario acordado.",
        cta: {
            label: "¡Empecemos!",
        },
    },
];
