//src/interfaces/register.ts
import { IAddress } from "./address";
import { IPerson } from "./person";

export interface IRegister {
    name: string;
    email: string;
    password: string;
    endereco: IAddress;
    nome: string;
    telefone: string;
}