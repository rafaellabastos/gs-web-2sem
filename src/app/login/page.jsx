"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [alerta, setAlerta] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/imunocheck/${usuario}`, {
            method: "get"
        })
        .then((resp) => resp.json())
        .then((resp) => {
            const usuarioCadastrado = resp;
            if (usuarioCadastrado.find((userCadastrado) => userCadastrado.usuario === usuario && userCadastrado.senha === senha)) {
                const usuario = usuarioCadastrado.map((userCadastrado) => userCadastrado.usuario)
                setAlerta("Usuário encontrado!");
                console.log(usuarioCadastrado)
                sessionStorage.setItem("user", JSON.stringify(usuario))
            } else {
                setAlerta("Usuário e/ou senha incorretos!");
            }
        })
        .catch((error) => {
            console.log("Não encontrado");
            console.log(error);
        });
    };

    return (
        <>
            <div className='cabecalhoTitulo'>
                <Link href='/'>ImunoCheck</Link>
            </div>
            
            <h2 className="tituloLogin">LOGIN</h2>

            <div className="cardLogin">
                <form onSubmit={handleSubmit}>
                    <br/><div>
                        <label htmlFor="username">Usuário:</label><br/>
                        <input type="text" id="username" onChange={(e) => setUsuario(e.target.value)}/>
                    </div>
        
                    <br/><div>
                        <label htmlFor="password">Senha:</label><br/>
                        <input type="password" id="password" onChange={(e) => setSenha(e.target.value)}/>
                    </div>
        
                    <div>
                        <button type="submit">Entrar</button>
                    </div>
                    {alerta}
                </form>
            </div>
        </>
    )
}