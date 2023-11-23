import "./ModalExcluir.scss";
import { useState } from "react";

export default function ModalExcluir({ isOpen, setOpen }) {
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaExcluir">
                        <span className="fecharModal" onClick={() => setOpen(false)}>&times;</span>
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