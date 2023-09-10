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

export const carouselServices = [
    {
        image: "/images/best-drivers-traslados-corporativos.jpeg",
        title: "Traslados Ejecutivos",
        text: "Servicio con perfil corporativo. Ideal para el traslado del personal de su empresa. Autos con el máximo confort y elemtnos de seguridad activa y pasiva.",
    },
    {
        image: "/images/best-drivers-traslados-grupales.jpeg",
        title: "Traslados Grupales",
        text: "Ideal para empresas que desean trasladar a su personal, colaboradores y directos a cumbres, congresos o eventos puntuales en forma grupal.",
    },
    {
        image: "/images/best-drivers-eventos.jpeg",
        title: "Traslados para Eventos",
        text: "Ofrecemos una flota de vehículos para darte una solución integral de logística para toda tu jornada corporativa o evento.",
    },
    {
        image: "/images/best-drivers-blindados.png",
        title: "Blindados",
        text: "Ofrecemos una flota de vehículos blindados para traslados de directivos, diplomáticos, personalidades y figuras públicas, con el máximo nivel de seguridad.",
    },
];

export const q_and_a = [
    {
        question: "¿Cuál es el área de cobertura?",
        answer: "Cubrimos toda el área de CABA y GBA, por otros destinos consultanos.",
    },
    {
        question: "¿Qué medios de pago aceptan?",
        answer: "Aceptamos Cuenta Corriente corporativa o Tarjetas de Crédito.",
    },
    {
        question: "¿Ofrecen servicios de Combis o Minivans?",
        answer: "Sí, desde 4 a 23 pasajeros, previo presupuesto y reserva formalizada.",
    },
    {
        question: "¿Se pueden hacer reservas telefónicamente?",
        answer: "Por supuesto. Podés realizar tus reservas Telefónicamente al 0800-345-2300, mediante E-mail y a través de nuestra App.",
    },
    {
        question: "¿Cuentan con servicios de fletes?",
        answer: "Se realizan mensajerias pequeñas. No trasladamos valores.",
    },
];

export const testimonials = [
    {
        company: "Minas Pirquitas LLC",
        position: "Dirección General",
        message:
            "La atención telefónica es impecable, también los tiempos de respuesta a pedido por correo electrónico y los datos brindados respecto a asignación de chofer. El pasajero que utiliza los servicios queda muy conforme.",
    },
    {
        company: "Viajes Verger",
        position: "Gerente General",
        message:
            "Best Drivers tiene la mejor atención y es sumamente recomendable. Lo utilizamos muchísimo para traslados médicos ya que el laboratorio es muy exigente y por suerte siempre tenemos buenas devoluciones gracias a ustedes.",
    },
    {
        company: "Ricoh",
        position: "Dirección General",
        message:
            "Gracias a TODO el TEAM de Best Drivers, siempre es una TRANQUILIDAD TRABAJAR CON UDS! (Cosa que en estos días que corren no es común, poder confiar en la calidad y excelencia de un servicio). GRACIAS!",
    },
    {
        company: "BBVA",
        position: "Servicios Generales",
        message:
            "Hace años solicito traslados con Best Drivers. Los operadores son muy amables. Si el caso lo requiere, siempre acompañando a buscar soluciones. Siempre recibo los mails de confirmación y avisos al celular.",
    },
    {
        company: "Torres Meeting & Incentives",
        position: "Dirección General",
        message:
            "Realmente estamos muy satisfechas con la excelencia del servicio de The Best Drivers. Lo más destacado es que su excelencia esta presente en cada una de las áreas involucradas haciendo aún mejor el resultado final.",
    },
    {
        company: "Allianz Seguros",
        position: "Dirección General",
        message:
            "Buenas tardes, muchas gracias por el mail. Es un placer comentarles que todas las personas que han viajado me han dado las mejores referencias de sus viajes. Muchas gracias por la paciencia, ayer los llame cientos de veces. Muy amables todas las personas que me han atendido por teléfono.",
    },
    {
        company: "Inventiv Health Clinical SA - Syneos Health",
        position: "Administración",
        message:
            "Excelente atención en el Call Center, reservas, cumplimiento de las mismas. Área administrativa muy buena predisposición, respuestas inmediatas y gran colaboración.",
    },
];
