import React from "react";
import Modal from "./Modal";
import useSubTypeModal from "@/hooks/useSubTypeModal";

interface SubTypeModal {
    children: React.ReactNode;
}

const SubTypeModal: React.FC<SubTypeModal> = () => {
    const { onClose, isOpen } = useSubTypeModal();

    const onChange = (open: boolean) => {
        //close onChange
        if (!open) {
            onClose();
        }
    };
    return <div>
        <Modal title='Welcome back'
            description='Login to your account.'
            isOpen={isOpen}
            onChange={onChange}>
            <></>
        </Modal>
    </div>;
};
export default SubTypeModal;
