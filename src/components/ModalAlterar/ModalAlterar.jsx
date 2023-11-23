import "./ModalAlterar.scss";
import { useState } from "react";

export default function ModalAlterar({ setOpen }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaAlterar">
                        <span className="fecharModal" onClick={() => setIsOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Alterar status</h1>
                        
                        <br/><div>
                            <label htmlFor="idVacina" className="subtituloAlterar">ID da vacina:</label><br/>
                            <input type="text" id="idVacina" className="inputAlterar"/>
                        </div>

                        <div>
                            <label htmlFor="status" className="subtituloAlterar">Você já tomou?</label><br/>
                            <select id="status" className='inputAlterar'>
                                <option value="">Escolha uma resposta</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>

                        <button className="botaoEnviar">Enviar</button>
                    </div>
                </div>
            )}
        </>
    )
}