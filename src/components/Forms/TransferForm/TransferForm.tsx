import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Button from "@/components/Button/Button";

const schema = z.object({
    name: z.string().nonempty(),
    phone: z.string().nonempty(),
    email: z.string().email(),
    message: z.string().nonempty(),
});

interface Inputs {
    [key: string]: string;
}

function TransferForm() {
    const { register, handleSubmit } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    const submitHandler = void handleSubmit(onSubmit);

    return (
        <form onSubmit={submitHandler} className="form">
            <h3 className="h3">¿Necesitás un traslado?</h3>

            <div className="input-group">
                <input placeholder="Nombre y apellido" {...register("name")} />
            </div>

            <div className="input-group">
                <input placeholder="Teléfono" {...register("phone")} />
            </div>

            <div className="input-group">
                <input placeholder="Email" {...register("email")} />
            </div>

            <div className="input-group">
                <textarea
                    placeholder="¿Que traslado necesitás?"
                    {...register("message")}
                    cols={10}
                    rows={10}
                ></textarea>
            </div>

            <Button.Primary type="submit">Enviar</Button.Primary>
        </form>
    );
}

export default TransferForm;
