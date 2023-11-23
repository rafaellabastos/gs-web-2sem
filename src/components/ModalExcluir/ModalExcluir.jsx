import "./ModalExcluir.scss";
import { useState } from "react";

export default function ModalExcluir({ setOpen }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaExcluir">
                        <span className="fecharModal" onClick={() => setIsOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Excluir status</h1>
                        
                        <br/><div>
                            <label htmlFor="idVacina" className="subtituloExcluir">ID da vacina:</label><br/>
                            <input type="text" id="idVacina" className="inputExcluir"/>
                        </div>

                        <button className="botaoEnviar">Enviar</button>
                    </div>
                </div>
            )}
        </>
    )
}