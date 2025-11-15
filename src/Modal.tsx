import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

export default function Modal({ children, isOpen, onClose }: Props) {

    if (!isOpen) return null;

    return createPortal(
        <div className="overlay"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0, left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('root') as HTMLElement
    )
}