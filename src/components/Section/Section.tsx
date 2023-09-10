import clsx from "clsx";
import Link from "next/link";

import Button from "@/components/Button/Button";

interface SectionProps extends ChildrenProps {
    title: string;
    description?: string[];
    className?: string;
    cta?: {
        label: string;
        href: string;
    };
}

function Section({ title, description, children, className, cta }: SectionProps) {
    return (
        <section className={clsx("section wrapper", className ?? "")}>
            <div className="section__content">
                <h2 className="h2 section__title">{title}</h2>

                {description && description.length > 0
                    ? description.map((item) => (
                          <p key={item} className="section__p p text-gray">
                              {item}
                          </p>
                      ))
                    : null}

                {cta ? (
                    <Link href={cta.href}>
                        <Button.Outline>{cta.label}</Button.Outline>
                    </Link>
                ) : null}
            </div>

            <div className="section__children">{children}</div>
        </section>
    );
}

export default Section;
