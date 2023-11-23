"use client"
import { useState } from "react";
import "./ModalInserir.scss";

export default function ModalInserir({ isOpen, setOpen }) {
        const usuarioCadastrado = sessionStorage.getItem("user")
        const usuario = usuarioCadastrado.replace(/^\["|"\]$/g, '')
        const estadoCadastrado = sessionStorage.getItem("estado")
        const estado = estadoCadastrado.replace(/^\["|"\]$/g, '')
        const [id, setId] = useState(0)
        const [status, setStatus] = useState("")
        const [dadosVacinado, setDadosVacinado] = useState({
            usuarioVac: "",
            estadoVac: "",
            id: 0,
            statusVac: "",
        })

        const handleChange = (() => {
            setDadosVacinado((prevDados) => ({
                ...prevDados,
                usuarioVac: usuario,
                estadoVac: estado,
                id: id,
                statusVac: status,
            }))
            console.log(dadosVacinado)
            console.log(status)
        })

        const handleSubmit = (async (e) => {
            e.preventDefault()
            try {
                const response = await fetch(`http://localhost:8080/imunocheck/vacinas`, {
                method: "post",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:  JSON.stringify(dadosVacinado)
            })
            if (response.ok){
                console.log("Inserido com sucesso!")
                setOpen(false)
            }
            else{
                console.log("Erro ao inserir")
            }
            } catch (error) {
                console.log("Erro ao inserir: " + error)
            }
            handleSubmitLocal(e)
        })

        const handleSubmitLocal = async (e) => {
            e.preventDefault()
            const response = await fetch(`http://localhost:3000/dados/vacinacao-api`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dadosVacinado)
            })
            const result = await response.json();
            console.log(result)
        }

    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaInserir">
                        <span className="fecharModal" onClick={() => setOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Inserir status</h1>
                        
                        <form onChange={handleChange}>
                                <br/><div>
                                <label htmlFor="idVacina" className="subtituloInserir">ID da vacina:</label><br/>
                                <input type="text" id="idVacina" className="inputInserir" onChange={(e) => setId(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="status" className="subtituloInserir">Você já tomou?</label><br/>
                                <select id="status" className='inputInserir' onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">Escolha uma resposta</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                            </div>
                        </form>
                        <button className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    )
}