import clsx from "clsx";

interface SectionProps extends ChildrenProps {
    title: string;
    description?: string[];
    className?: string;
}

function Section({ title, description, children, className }: SectionProps) {
    return (
        <section className={clsx("section wrapper", className ?? "")}>
            <div className="section__content">
                <h2 className="h2 section__title">{title}</h2>

                {description && description.length > 0
                    ? description.map((item) => (
                          <p key={item} className="section__p text-gray">
                              {item}
                          </p>
                      ))
                    : null}
            </div>

            <div className="section__children">{children}</div>
        </section>
    );
}

export default Section;
