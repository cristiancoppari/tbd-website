/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import logo from "/public/images/logo-white.svg";

import Button from "../Button/Button";

import Link from "next/link";

import { navbarEls } from "@/data/data";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <div className="navbar__content">
                    <img className="logo" src={logo.src} alt="" />

                    <ul>
                        {navbarEls.map((el) => (
                            <li className="menu-label" key={el.label}>
                                <Link href={el.url}>{el.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <Button.Primary>Cotizá ahora</Button.Primary>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
