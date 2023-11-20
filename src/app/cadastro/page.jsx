import Link from 'next/link';

export default function Cadastro() {
    return (
        <>
            <div className="cabecalhoTitulo">
                <Link href='/'>ImunoCheck</Link>
            </div>

            <h2 className='tituloLogin'>CADASTRO</h2>
                
            <form className='cardCadastro'>
                <br/><div>
                    <label htmlFor="name">Nome completo:</label><br/>
                    <input type="text" id="name"/>
                </div>

                <br/><div>
                    <label htmlFor="age">Idade:</label><br/>
                    <input type="text" id="age"/>
                </div>

                <br/><div>
                    <label htmlFor="city">Cidade:</label><br/>
                    <input type="text" id="city"/>
                </div>
            
                <br/><div>
                    <label htmlFor="username">Usuário:</label><br/>
                    <input type="text" id="username"/>
                </div>
                
                <br/><div>
                    <label htmlFor="password">Senha:</label><br/>
                    <input type="password" id="password"/>
                </div>
                
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </>
    )
}