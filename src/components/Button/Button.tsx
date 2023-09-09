interface ButtonProps extends ChildrenProps {
    type?: "button" | "submit" | "reset";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Button(props: ButtonProps) {
    // If you don't want the base Button to render anything specific, return null.
    // Alternatively, you can return some default button JSX.
    return null;
}

function PrimaryButton({ children, type = "button" }: ButtonProps) {
    return (
        <button type={type} className="btn btn-primary">
            {children}
        </button>
    );
}

function OutlineButton({ children, type = "button" }: ButtonProps) {
    return (
        <button type={type} className="btn btn-outline">
            {children}
        </button>
    );
}

// Attach the sub-components to Button
Button.Primary = PrimaryButton;
Button.Outline = OutlineButton;

export default Button;
