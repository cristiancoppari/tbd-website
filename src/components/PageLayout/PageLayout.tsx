import Head from "next/head";

import Header from "../Header/Header";
// import Footer from "@/components/Layout/Footer/Footer";
// import WhatsappButton from "@/components/Buttons/WhatsappButton/WhatsappButton";

interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

function PageLayout({ children, title, description }: PageLayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <div>
                <Header />
                {children}
                {/* <Footer /> */}

                {/* <WhatsappButton /> */}
            </div>
        </>
    );
}

export default PageLayout;
