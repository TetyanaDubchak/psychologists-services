
 const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>, onClose: () => void):void => {
        if (e.target === e.currentTarget) {
            onClose();
        }
};
    
 const handleEscapeClick = (onClose: () => void): ()=>void => {
        const handleKeyDown = (e:KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
};
    
 const handleBlockBody = () => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "auto";
    };
}

 const handleUnBlockBody = () => {
    document.body.style.overflow = "auto";
}

export {handleBackdropClick, handleEscapeClick, handleBlockBody,handleUnBlockBody}