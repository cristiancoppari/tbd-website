import { type ReactNode } from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
    children?: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Button(props: ButtonProps) {
    // If you don't want the base Button to render anything specific, return null.
    // Alternatively, you can return some default button JSX.
    return null;
}

function PrimaryButton(props: ButtonProps) {
    return <button className={styles.primary}>{props.children}</button>;
}

function SecondaryButton(props: ButtonProps) {
    return <button className="secondary">{props.children}</button>;
}

// Attach the sub-components to Button
Button.Primary = PrimaryButton;
Button.Secondary = SecondaryButton;

export default Button;
