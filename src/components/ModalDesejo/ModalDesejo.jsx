import { useState } from "react";
import "./ModalDesejo.scss"
import ModalInserir from "../ModalInserir/ModalInserir";
import ModalExcluir from "../ModalExcluir/ModalExcluir";
import ModalAlterar from "../ModalAlterar/ModalAlterar";

export default function ModalDesejo({ setOpenModalDesejo }) {
    const [isInserirOpen, setIsInserirOpen] = useState(false);
    const [isExcluirOpen, setIsExcluirOpen] = useState(false);
    const [isAlterarOpen, setIsAlterarOpen] = useState(false);

    //Botão de inserir
    const handleInserirButtonClick = () => {
        setIsInserirOpen(true); 
    }

    //Botão de excluir
    const handleExcluirButtonClick = () => {
        setIsExcluirOpen(true);
    }

    //Botão de alterar
    const handleAlterarButtonClick = () => {
        setIsAlterarOpen(true);
    }

    //Botão de fechar
    const handleCloseModal = () => {
        setOpenModalDesejo(false);
        setIsInserirOpen(false);
        setIsExcluirOpen(false);
        setIsAlterarOpen(false);
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
                <ModalInserir isOpen={isInserirOpen} setOpen={() => setIsInserirOpen(false)}/>
            )}

            {isExcluirOpen && (
                <ModalExcluir isOpen={isExcluirOpen} setOpen={() => setIsExcluirOpen(false)}/>
            )}

            {isAlterarOpen && (
                <ModalAlterar isOpen={isAlterarOpen} setOpen={() => setIsAlterarOpen(false)}/>
            )}
        </>
    )
}