import type { AppProps } from "next/app";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

import "swiper/css";
import "@/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={raleway.className}>
            <Component {...pageProps} />
        </main>
    );
}
