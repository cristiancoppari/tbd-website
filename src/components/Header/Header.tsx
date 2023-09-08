import { headerUpEls } from "@/data/data";

import Navbar from "../Navbar/Navbar";

import styles from "./Header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <ul className={styles.headerUp}>
                    {headerUpEls.map((el, i) => (
                        <li key={i} className="menu-label">
                            {el.action ? (
                                <a href={el.action} target="_blank" referrerPolicy="no-referrer">
                                    {el.icon}

                                    {el.label && <span>{el.label}</span>}
                                </a>
                            ) : (
                                <>
                                    {el.icon}

                                    {el.label && <span>{el.label}</span>}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <Navbar />
        </header>
    );
}

export default Header;
