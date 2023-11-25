"use client"
import { useState } from "react";
import "./ModalInserir.scss";

// Componente responsável por exibir um modal para inserção de status de vacinação
export default function ModalInserir({ isOpen, setOpen }) {
    // Obtém o usuário e o estado da sessão
    const usuarioCadastrado = sessionStorage.getItem("user");
    const usuario = usuarioCadastrado.replace(/^\["|"\]$/g, '');
    const estadoCadastrado = sessionStorage.getItem("estado");
    const estado = estadoCadastrado.replace(/^\["|"\]$/g, '');

    // Estado para armazenar os dados do usuário vacinado
    const [dadosVacinado, setDadosVacinado] = useState({
        usuarioVac: usuario,
        estadoVac: estado,
        id: 0,
        statusVac: "",
    });

    // Atualiza o estado do ID da vacina quando o input é alterado
    const handleChangeId = ((e) => {
        setDadosVacinado((prevDados) => ({
            ...prevDados,
            id: e.target.value,
        }));
        console.log(dadosVacinado);
    });

    // Atualiza o estado do status de vacinação quando a seleção é alterada
    const handleChangeStt = ((event) => {
        setDadosVacinado((prevDados) => ({
            ...prevDados,
            statusVac: event.target.value,
        }));
        console.log(dadosVacinado);
    });

    // Envia os dados para o servidor remoto ao clicar no botão "Enviar"
    const handleSubmit = (async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/imunocheck/vacinas`, {
                method: "post",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:  JSON.stringify(dadosVacinado)
            });

            if (response.ok){
                console.log("Inserido com sucesso!");
                window.location.reload();
                setOpen(false);
                handleSubmitLocal(e);
            }
            else{
                console.log("Erro ao inserir");
                console.log("Erro na requisição local:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao inserir: " + error);
        }
    });

    // Envia os dados para o servidor local
    const handleSubmitLocal = async (e) => {
        try {
            const response = await fetch(`http://localhost:3000/dados/vacinacao-api`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dadosVacinado),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
            } else {
                console.error("Erro na requisição local:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao processar a requisição local:", error);
        }
    };

    // Renderiza o modal se isOpen for verdadeiro
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaInserir">
                        <span className="fecharModal" onClick={() => setOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Inserir status</h1>
                        
                        {/* Formulário para inserção de dados */}
                        <form>
                            <div>
                                <label htmlFor="idVacina" className="subtituloInserir">ID da vacina:</label><br/>
                                <input type="text" id="idVacina" className="inputInserir" onChange={handleChangeId}/>
                            </div>

                            <div>
                                <label htmlFor="status" className="subtituloInserir">Você já tomou?</label><br/>
                                <select id="status" className='inputInserir' onChange={handleChangeStt}>
                                    <option value="">Escolha uma resposta</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                            </div>
                        </form>

                        {/* Botão para enviar os dados */}
                        <button className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    );
}
