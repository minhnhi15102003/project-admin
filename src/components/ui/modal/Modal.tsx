import type React from "react"

interface ModalProps {
    isOpen: boolean,
    children: React.ReactNode,
    showCloseButton?: boolean,
    isFullscreen?: boolean
}

const Modal = (
    {isOpen,
    children,
    showCloseButton = true,
    isFullscreen = false }:
        ModalProps) => {
    return (
        <div>Modal</div>
    )
}

export default Modal