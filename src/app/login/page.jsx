import Link from 'next/link'

export default function Login() {
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
                        <input type="text" id="username"/>
                    </div>
        
                    <br/><div>
                        <label htmlFor="password">Senha:</label><br/>
                        <input type="password" id="password"/>
                    </div>
        
                    <div>
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}