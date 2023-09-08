import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
    example: string;
    exampleRequired: string;
};

function TransferForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={void handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}

export default TransferForm;
