import { IAddress } from "./address";

export interface IRegister {
    name: string;
    email: string;
    password: string;
    nome: string;
    telefone: string;
    endereco: IAddress;
}