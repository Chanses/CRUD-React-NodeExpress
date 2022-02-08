import { IConfirmModal } from "../../components/Modals/ConfirmModal/ConfirmModal";
import { ICreateModal } from "../../components/Modals/CreateModal/CreateModal";

export interface ModalRegistry {
    "confirmModal": IConfirmModal,
    "createModal": ICreateModal,

}