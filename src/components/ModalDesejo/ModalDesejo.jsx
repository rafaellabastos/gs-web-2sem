import { useState } from "react";
import "./ModalDesejo.scss"
import ModalInserir from "../ModalInserir/ModalInserir";
import ModalExcluir from "../ModalExcluir/ModalExcluir";
import ModalAlterar from "../ModalAlterar/ModalAlterar";

// Componente responsável por exibir um modal para selecionar a ação desejada (Inserir, Excluir, Alterar)
export default function ModalDesejo({ setOpenModalDesejo }) {
    // Estados para controlar a abertura dos modais específicos
    const [isInserirOpen, setIsInserirOpen] = useState(false);
    const [isExcluirOpen, setIsExcluirOpen] = useState(false);
    const [isAlterarOpen, setIsAlterarOpen] = useState(false);

    // Botão de inserir - abre o modal de inserção
    const handleInserirButtonClick = () => {
        setIsInserirOpen(true); 
    }

    // Botão de excluir - abre o modal de exclusão
    const handleExcluirButtonClick = () => {
        setIsExcluirOpen(true);
    }

    // Botão de alterar - abre o modal de alteração
    const handleAlterarButtonClick = () => {
        setIsAlterarOpen(true);
    }

    // Botão de fechar - fecha todos os modais
    const handleCloseModal = () => {
        setOpenModalDesejo(false);
        setIsInserirOpen(false);
        setIsExcluirOpen(false);
        setIsAlterarOpen(false);
    }
    
    return (
        <>
            {/* Modal principal para selecionar a ação desejada */}
            <div className="modalOverlay">
                <div className="caixaDesejo">
                    <span className="fecharModal" onClick={handleCloseModal}>&times;</span>
                    <h1 className="tituloModal">O que você deseja fazer?</h1>
                    <button className="botaoDesejo" onClick={handleInserirButtonClick}>Inserir status</button>
                    <button className="botaoDesejo" onClick={handleExcluirButtonClick}>Excluir status</button>
                    <button className="botaoDesejo" onClick={handleAlterarButtonClick}>Fazer alteração</button>
                </div>
            </div>

            {/* Modais específicos para cada ação */}
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
