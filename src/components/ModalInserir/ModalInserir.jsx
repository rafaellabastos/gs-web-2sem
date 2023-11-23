import "./ModalInserir.scss";
import { useState } from "react";

export default function ModalInserir({ setOpen }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaInserir">
                        <span className="fecharModal" onClick={() => setIsOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Inserir status</h1>
                        
                        <br/><div>
                            <label htmlFor="idVacina" className="subtituloInserir">ID da vacina:</label><br/>
                            <input type="text" id="idVacina" className="inputInserir"/>
                        </div>

                        <div>
                            <label htmlFor="status" className="subtituloInserir">Você já tomou?</label><br/>
                            <select id="status" className='inputInserir'>
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