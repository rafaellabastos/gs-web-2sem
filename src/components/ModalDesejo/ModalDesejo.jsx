import { useState } from "react";
import "./ModalDesejo.scss"
import ModalInserir from "../ModalInserir/ModalInserir";

export default function ModalDesejo({ setOpenModalDesejo }) {
    const [isInserirOpen, setIsInserirOpen] = useState(false);

    const handleInserirButtonClick = () => {
        setIsInserirOpen(true); 
    }

    const handleCloseModal = () => {
        setOpenModalDesejo(false);
    }
    
    return (
        <>
            <div className="modalOverlay">
                <div className="caixaDesejo">
                    <span className="fecharModal" onClick={handleCloseModal}>&times;</span>
                    <h1 className="tituloModal">O que você deseja fazer?</h1>
                    <button className="botaoDesejo" onClick={handleInserirButtonClick}>Inserir status</button>
                    <button className="botaoDesejo">Excluir status</button>
                    <button className="botaoDesejo">Fazer alteração</button>
                </div>
            </div>

            {isInserirOpen && (
                <ModalInserir setOpen={() => setIsInserirOpen(false)}/>
            )}
        </>
    )
}