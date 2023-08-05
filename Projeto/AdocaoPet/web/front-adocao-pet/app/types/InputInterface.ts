import { FormEventHandler } from "react";

 export default interface InputInterface {
    name: string ,
    placeholder?: string,
    value?: string,
    setValue?: FormEventHandler
}