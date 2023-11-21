"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [usuarioCadastrado, setUsuarioCadastrado] = useState([]);
    const [alerta, setAlerta] = useState("")

    const handleChange = ((e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/imunocheck/${usuario}`, {
            method: "get"
        }).then((resp) => {
            return resp.json()
        }).then((resp) => {
            setUsuarioCadastrado(resp)
            console.log(usuarioCadastrado)
        }).catch((error) =>{
            console.log("Não encontrado")
            console.log(error)
        })
        handleSubmit()
    })
    const handleSubmit = (() => {
        if( usuarioCadastrado.find((userCadastrado) => userCadastrado.usuario == usuario && userCadastrado.senha == senha)){
            setAlerta("Usuário encontrado!")
        }
        else{
            setAlerta("Usuário e/ou senha incorretos!")
        }
    })

    return (
        <>
            <div className='cabecalhoTitulo'>
                <Link href='/'>ImunoCheck</Link>
            </div>
            
            <h2 className="tituloLogin">LOGIN</h2>

            <div className="cardLogin">
                <form>
                    <br/><div>
                        <label htmlFor="username">Usuário:</label><br/>
                        <input type="text" id="username" onChange={(e) => setUsuario(e.target.value)}/>
                    </div>
        
                    <br/><div>
                        <label htmlFor="password">Senha:</label><br/>
                        <input type="password" id="password" onChange={(e) => setSenha(e.target.value)}/>
                    </div>
        
                    <div>
                        <button type="submit" onClick={handleChange}>Entrar</button>
                    </div>
                    {alerta}
                </form>
            </div>
        </>
    )
}