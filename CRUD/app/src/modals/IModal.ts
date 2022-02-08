import { ModalRegistry } from "./enum/modalNameRegistry";

export interface IModal {
    title: string,
    children: any;
    modalName: keyof ModalRegistry;

}