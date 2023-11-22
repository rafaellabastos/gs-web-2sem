import { useState } from "react";
import "./ModalDesejo.css"

export default function ModalDesejo({ setOpen }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleInserirStatus = () => {
      console.log("Inserir Status");
      setOpen(false);
    };

    const handleExcluirStatus = () => {
      console.log("Excluir Status");
      setOpen(false);
    };

    const handleFazerAlteracao = () => {
      console.log("Fazer alteração");
      setOpen(false);   
    }
    
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaDesejo">
                        <span className="fecharModal" onClick={() => setIsOpen(false)}>&times;</span>
                        <h1 className="tituloModal">O que você deseja fazer?</h1>
                        <button className="botaoDesejo" onClick={handleInserirStatus}>Inserir status</button>
                        <button className="botaoDesejo" onClick={handleExcluirStatus}>Excluir status</button>
                        <button className="botaoDesejo" onClick={handleFazerAlteracao}>Fazer alteração</button>
                    </div>
                </div>
            )}
        </>
    )
}
