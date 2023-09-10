import clsx from "clsx";

import Button from "../../Button/Button";

interface ImageTextCtaProps {
    title: string;
    text: string;
    image: string;
    className?: string;
    imagePosition?: "left" | "right" | "top" | "bottom";
}

function ImageTextCta({
    children,
    className,
    title,
    text,
    image,
    imagePosition = "right",
}: ImageTextCtaProps & ChildrenProps) {
    return (
        <article className={clsx(`imageTextCta`, imagePosition ?? "", className ?? "")}>
            <img src={image} alt={title} />

            <div className="imageTextCta__content">
                <div className="imageTextCta__title-and-p">
                    <h2 className="title h4">{title}</h2>

                    <p className="p">{text}</p>
                </div>

                {children}
            </div>
        </article>
    );
}

function Cta({ children }: ChildrenProps) {
    return <Button.Outline>{children}</Button.Outline>;
}

ImageTextCta.Cta = Cta;

export default ImageTextCta;
