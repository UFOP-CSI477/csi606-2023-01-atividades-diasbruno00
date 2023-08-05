import InputInterface from "../../types/InputInterface";

export default function Input(
    {
        name, placeholder ,value, setValue

    }: InputInterface) {

    return (
        <input
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={setValue}
        ></input>

    );
}