import TransferForm from "@/components/Forms/TransferForm/TransferForm";
import Button from "@/components/Button/Button";

interface ChildrenProps {
    children: React.ReactNode;
}

interface HeroFormProps extends ChildrenProps {
    form: boolean;
}

function HeroForm({ children, form = true }: HeroFormProps) {
    return (
        <section className="heroHome">
            <div className="wrapper">
                <div className="heroHome__content">{children}</div>

                {form ? (
                    <div className="heroHome__form">
                        <TransferForm />
                    </div>
                ) : null}
            </div>
        </section>
    );
}

function Title({ children }: ChildrenProps) {
    return <h1 className="h1 title">{children}</h1>;
}

function Description({ children }: ChildrenProps) {
    return <p className="p-big">{children}</p>;
}

function Cta({ children }: ChildrenProps) {
    return <Button.Primary>{children}</Button.Primary>;
}

HeroForm.Title = Title;
HeroForm.Description = Description;
HeroForm.Cta = Cta;

export default HeroForm;
