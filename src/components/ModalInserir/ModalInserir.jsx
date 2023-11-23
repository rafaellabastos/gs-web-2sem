import "./ModalInserir.scss";

export default function ModalInserir({ isOpen, setOpen }) {
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaInserir">
                        <span className="fecharModal" onClick={() => setOpen(false)}>&times;</span>
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