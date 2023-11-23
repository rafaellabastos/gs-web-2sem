import { useState } from "react";
import "./ModalDesejo.scss"
import ModalInserir from "../ModalInserir/ModalInserir";
import ModalExcluir from "../ModalExcluir/ModalExcluir";
import ModalAlterar from "../ModalAlterar/ModalAlterar";

export default function ModalDesejo({ setOpenModalDesejo }) {
    const [isInserirOpen, setIsInserirOpen] = useState(false);
    const [isExcluirOpen, setIsExcluirOpen] = useState(false);
    const [isAlterarOpen, setIsAlterarOpen] = useState(false);

    const handleInserirButtonClick = () => {
        setIsInserirOpen(true); 
    }

    const handleExcluirButtonClick = () => {
        setIsExcluirOpen(true);
    }

    const handleAlterarButtonClick = () => {
        setIsAlterarOpen(true);
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
                    <button className="botaoDesejo" onClick={handleExcluirButtonClick}>Excluir status</button>
                    <button className="botaoDesejo" onClick={handleAlterarButtonClick}>Fazer alteração</button>
                </div>
            </div>

            {isInserirOpen && (
                <ModalInserir setOpen={() => setIsInserirOpen(false)}/>
            )}

            {isExcluirOpen && (
                <ModalExcluir setOpen={() => setIsExcluirOpen(false)}/>
            )}

            {isAlterarOpen && (
                <ModalAlterar setOpen={() => setIsAlterarOpen(false)}/>
            )}
        </>
    )
}