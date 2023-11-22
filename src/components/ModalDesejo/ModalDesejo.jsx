import { useState } from "react";
import "./ModalDesejo.css"

export default function ModalDesejo({ setOpen }) {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaDesejo">
                        <span className="fecharModal" onClick={() => setIsOpen(false)}>&times;</span>
                        <h1 className="tituloModal">O que você deseja fazer?</h1>
                        <button className="botaoDesejo">Inserir status</button>
                        <button className="botaoDesejo">Excluir status</button>
                        <button className="botaoDesejo">Fazer alteração</button>
                    </div>
                </div>
            )}
        </>
    )
}
