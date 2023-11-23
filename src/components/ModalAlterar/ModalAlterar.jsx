import { useState } from "react";
import "./ModalAlterar.scss";

export default function ModalAlterar({ isOpen, setOpen }) {
    const usuarioCadastrado = sessionStorage.getItem("user")
        const usuario = usuarioCadastrado.replace(/^\["|"\]$/g, '')
        const estadoCadastrado = sessionStorage.getItem("estado")
        const estado = estadoCadastrado.replace(/^\["|"\]$/g, '')
        const [dadosAlterados, setDadosAlterados] = useState({
            usuarioVac: usuario,
            estadoVac: estado,
            id: 0,
            statusVac: "",
        })

        const handleChangeId= ((e) => {
            setDadosAlterados((prevDados) => ({
                ...prevDados,
                id: e.target.value,
            }))
        })
        const handleChangeStt = ((event) => {
            setDadosAlterados((prevDados) => ({
                ...prevDados,
                statusVac: event.target.value,
            }))
        })

        const handleSubmit = (async (e) => {
            e.preventDefault()
            console.log(dadosAlterados)
            try {
                const response = await fetch(`http://localhost:8080/imunocheck/vacinas`, {
                method: "put",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:  JSON.stringify(dadosAlterados)
            })
            if (response.ok){
                console.log("Alterado com sucesso!")
                setOpen(false)
            }
            else{
                console.log("Erro ao alterar")
            }
            } catch (error) {
                console.log("Erro ao alterar: " + error)
            }
        })
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaAlterar">
                        <span className="fecharModal" onClick={() => setOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Alterar status</h1>
                        
                        <br/><div>
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

                        <button className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    )
}