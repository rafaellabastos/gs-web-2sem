import { useState } from "react";
import "./ModalAlterar.scss";

// Componente responsável por exibir um modal para alteração de status de vacinação
export default function ModalAlterar({ isOpen, setOpen }) {
    // Obtém o usuário e o estado da sessão
    const usuarioCadastrado = sessionStorage.getItem("user");
    const usuario = usuarioCadastrado.replace(/^\["|"\]$/g, '');
    const estadoCadastrado = sessionStorage.getItem("estado");
    const estado = estadoCadastrado.replace(/^\["|"\]$/g, '');

    // Estado para armazenar os dados a serem alterados
    const [dadosAlterados, setDadosAlterados] = useState({
        usuarioVac: usuario,
        estadoVac: estado,
        id: 0,
        statusVac: "",
    });

    // Atualiza o estado do ID da vacina quando o input é alterado
    const handleChangeId = ((e) => {
        setDadosAlterados((prevDados) => ({
            ...prevDados,
            id: e.target.value,
        }));
    });

    // Atualiza o estado do status de vacinação quando a seleção é alterada
    const handleChangeStt = ((event) => {
        setDadosAlterados((prevDados) => ({
            ...prevDados,
            statusVac: event.target.value,
        }));
    });

    // Envia uma requisição para alterar o status da vacina correspondente ao ID informado
    const handleSubmit = (async (e) => {
        e.preventDefault();
        console.log(dadosAlterados);
        try {
            const response = await fetch(`http://localhost:8080/imunocheck/vacinas`, {
                method: "put",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:  JSON.stringify(dadosAlterados)
            });

            if (response.ok) {
                console.log("Alterado com sucesso!");
                window.location.reload();
                setOpen(false);
            } else {
                console.log("Erro ao alterar");
            }
        } catch (error) {
            console.log("Erro ao alterar: " + error);
        }
    });

    // Renderiza o modal se isOpen for verdadeiro
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaAlterar">
                        <span className="fecharModal" onClick={() => setOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Alterar status</h1>
                        
                        {/* Formulário para alterar dados */}
                        <div>
                            <label htmlFor="idVacina" className="subtituloAlterar">ID da vacina:</label><br/>
                            <input type="text" id="idVacina" className="inputAlterar" onChange={handleChangeId}/>
                        </div>

                        <div>
                            <label htmlFor="status" className="subtituloAlterar">Você já tomou?</label><br/>
                            <select id="status" className='inputAlterar' onChange={handleChangeStt}>
                                <option value="">Escolha uma resposta</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>

                        {/* Botão para enviar a solicitação de alteração */}
                        <button className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    );
}
