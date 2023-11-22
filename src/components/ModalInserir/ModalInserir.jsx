export default function ModalInserir({ setOpen }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaInserir">
                        <span className="fecharModal" onClick={() => setIsOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Inserir status</h1>

                        <div>
                            <label htmlFor="state">Você já tomou?</label><br/>
                            <select id="state" className='opcoesEstado'>
                                <option value="">Escolha uma resposta</option>
                                {estados.map(estado => (
                                <option key={estado.nome} value={estado.nome}>{estado.nome}</option>
                            ))}
                            </select>
                        </div>

                        <button className="botaoEnviar">Enviar</button>
                    </div>
                </div>
            )}
        </>
    )
}