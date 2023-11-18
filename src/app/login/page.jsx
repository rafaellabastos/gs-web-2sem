export default function Login() {
    return (
        <>
            <h1>ImunoCheck</h1>

            <h2>LOGIN</h2>

            <form>
                <div>
                    <label htmlFor="username">Usuário:</label>
                    <input type="text" id="username" value={username} />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" value={password}/>
                </div>

                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </>
    )
}