"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Cadastro() {
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [idade, setIdade] = useState(0);
    const [estado, setEstado] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [novoCadastro, setNovoCadastro] = useState({
        nome : "",
        idade: 0,
        estado: "",
        usuario: "",
        senha: ""
    });

    const handleChange = ((e) => {
        e.preventDefault()
       setNovoCadastro((prevCadastro) => ({
            ...prevCadastro,
            nome : nomeCompleto,
            idade : idade,
            estado: estado,
            usuario: usuario,
            senha: e.target.value
        }))
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:8080/imunocheck/`, {
            method: "post",
            headers: {
                "Content-Type" : "application/json",
            },
            body:  JSON.stringify(novoCadastro)
        })
        if (response.ok){
            console.log("Cadastrado com sucesso!")
            console.log(novoCadastro)
            window.location.href("/")
        }
        else{
            console.log("Erro ao cadastrar")
        }
        handleSubmitLocal(e)
        } catch (error) {
            console.log("Erro ao cadastrar: " + error)
        }
    }

    const handleSubmitLocal = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3000/dados/usuarios-api`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoCadastro)
        })
        const result = await response.json();
        console.log(result)
    }
    return (
        <>
            <div className="cabecalhoTitulo">
                <Link href='/'>ImunoCheck</Link>
            </div>

            <h2 className='tituloLogin'>CADASTRO</h2>
                
            <form className='cardCadastro' onChange={handleChange}>
                <br/><div>
                    <label htmlFor="name">Nome completo:</label><br/>
                    <input type="text" id="name" onChange={(e) => setNomeCompleto(e.target.value)}/>
                </div>

                <br/><div>
                    <label htmlFor="age">Idade:</label><br/>
                    <input type="text" id="age" onChange={(e) => setIdade(e.target.value)}/>
                </div>

                <br/><div>
                    <label htmlFor="city">Estado:</label><br/>
                    <input type="text" id="city" onChange={(e) => setEstado(e.target.value)}/>
                </div>
            
                <br/><div>
                    <label htmlFor="username">Usuário:</label><br/>
                    <input type="text" id="username" onChange={(e) => setUsuario(e.target.value)}/>
                </div>
                
                <br/><div>
                    <label htmlFor="password">Senha:</label><br/>
                    <input type="password" id="password" onChange={(e) => setSenha(e.target.value)}/>
                </div>
                
                <div>
                    <button type="submit" onClick={handleSubmit}>Cadastrar</button>
                </div>
            </form>
        </>
    )
}