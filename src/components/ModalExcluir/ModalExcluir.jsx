import { useState } from "react";
import "./ModalExcluir.scss";

export default function ModalExcluir({ isOpen, setOpen }) {
    const usuarioCadastrado = sessionStorage.getItem("user");
    const usuario = usuarioCadastrado.replace(/^\["|"\]$/g, '')
    const [id, setId] = useState("")
    const handleChange = ((e) => {
        e.preventDefault()
        setId(e.target.value)
    })

    const handleSubmit = (async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:8080/imunocheck/vacinas/${usuario}/${id}`, {
            method: "delete",
        })
        if (response.ok){
            console.log("Deletado com sucesso!")
            sessionStorage.setItem("id", id)
            getAllVac(e)
            //window.location.reload()
            setOpen(false)
        }
        else{
            console.log("Erro ao deletar")
        }
        } catch (error) {
            console.log("Erro ao deletar: " + error)
        }
    })

    const handleSubmitLocal = async (usuarios) => {
        console.log(usuarios);
        try {
            const response = await fetch('http://localhost:3000/dados/atualizar-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ dados: usuarios }), // Converta para uma string JSON
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log(result);
            } else {
                console.error('Erro na requisição local:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao processar a requisição local:', error);
        }
    };
    const getAllVac = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/imunocheck/vacinas`, {
            method: "get"
        }).then((resp) => resp.json()).then((resp) => {
            const usuariosVac = resp
            sessionStorage.setItem("usuarios", JSON.stringify(usuariosVac))
            console.log(usuariosVac)
            handleSubmitLocal(usuariosVac)
        })
        
       
    }
    
    
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="caixaExcluir">
                        <span className="fecharModal" onClick={() => setOpen(false)}>&times;</span>
                        <h1 className="tituloModal">Excluir status</h1>
                        
                        <br/><div>
                            <label htmlFor="idVacina" className="subtituloExcluir">ID da vacina:</label><br/>
                            <input type="text" id="idVacina" className="inputExcluir" onChange={handleChange}/>
                        </div>

                        <button className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    )
}