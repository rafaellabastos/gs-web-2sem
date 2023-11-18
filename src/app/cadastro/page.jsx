export default function Cadastro() {
    return (
        <>
             <h1>ImunoCheck</h1>

            <h2>CADASTRO</h2>
                
            <form>
                <div>
                    <label htmlFor="name">Nome completo:</label>
                    <input type="text" id="name"/>
                </div>

                <div>
                    <label htmlFor="age">Idade:</label>
                    <input type="text" id="age"/>
                </div>

                <div>
                    <label htmlFor="city">Cidade:</label>
                    <input type="text" id="city"/>
                </div>
            
                <div>
                    <label htmlFor="username">Usuário:</label>
                    <input type="text" id="username"/>
                </div>
                
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password"/>
                </div>
                
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </>
    )
}