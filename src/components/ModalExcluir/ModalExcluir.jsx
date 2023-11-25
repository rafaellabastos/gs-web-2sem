import { useState } from "react";
import "./ModalExcluir.scss";

// Componente responsável por exibir um modal para exclusão de status de vacinação
export default function ModalExcluir({ isOpen, setOpen }) {
    // Obtém o usuário da sessão
    const usuarioCadastrado = sessionStorage.getItem("user");
    const usuario = usuarioCadastrado.replace(/^\["|"\]$/g, '');

    // Estado para armazenar o ID da vacina a ser excluído
    const [id, setId] = useState("");

    // Atualiza o estado do ID da vacina quando o input é alterado
    const handleChange = ((e) => {
        e.preventDefault();
        setId(e.target.value);
    });

    // Envia uma requisição para excluir a vacina correspondente ao ID informado
    const handleSubmit = (async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/imunocheck/vacinas/${usuario}/${id}`, {
                method: "delete",
            });

            if (response.ok) {
                console.log("Deletado com sucesso!");
                sessionStorage.setItem("id", id);
                window.location.reload();
                setOpen(false);
            } else {
                console.log("Erro ao deletar");
            }
        } catch (error) {
            console.log("Erro ao deletar: " + error);
        }
    });

    // Renderiza o modal se isOpen for verdadeiro
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaExcluir">
                        <span className="fecharModal" onClick={() => setOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Excluir status</h1>
                        
                        {/* Formulário para informar o ID da vacina a ser excluída */}
                        <div>
                            <label htmlFor="idVacina" className="subtituloExcluir">ID da vacina:</label><br/>
                            <input type="text" id="idVacina" className="inputExcluir" onChange={handleChange}/>
                        </div>

                        {/* Botão para enviar a solicitação de exclusão */}
                        <button className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    );
}
