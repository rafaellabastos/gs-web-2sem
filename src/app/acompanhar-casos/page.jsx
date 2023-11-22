    "use client";
    import { useEffect, useState } from 'react';
    import Link from 'next/link';

    export default function AcompanharCasos() {
        const [loading, setLoading] = useState(false);
        const [mostrar, setMostrar] = useState(false); 
        const [estado, setEstado] = useState("");
        const [counter1, setCounter1] = useState("")
        const [counter2, setCounter2] = useState("")
        const [counter3, setCounter3] = useState("")
        const [counter4, setCounter4] = useState("")
        const [counter5, setCounter5] = useState("")
        const [counter6, setCounter6] = useState("")
        const [counter7, setCounter7] = useState("")
        const [counter8, setCounter8] = useState("")
        const [counter9, setCounter9] = useState("")
        const [counter10, setCounter10] = useState("")
        const [counter11, setCounter11] = useState("")
        const [counter12, setCounter12] = useState("")
        const [counter13, setCounter13] = useState("")
        const [counter14, setCounter14] = useState("")
        const [counter15, setCounter15] = useState("")
        const [counter16, setCounter16] = useState("")
        const [counter17, setCounter17] = useState("")
        const [counter18, setCounter18] = useState("")
        const statusPositivo = 'Sim'

        const handleChange = ((event) => {
            setEstado(event.target.value)
        })
        const handleSubmit = (() => {
            setMostrar(true)
            fetch(`http://localhost:8080/imunocheck/vacinas`, {
                method: "get"
            }).then((resp) => resp.json())
            .then((resp) => {
                const tabelaVac = resp;
                console.log(tabelaVac)
                const dadosVac1= tabelaVac.filter(item => item.estadoVac === estado && item.id === 1 && item.statusVac === 'Sim')
                setCounter1(dadosVac1.length)
                const dadosVac2 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 2 && item.statusVac === 'Sim')
                setCounter2 (dadosVac2.length)
                const dadosVac3 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 3 && item.statusVac === 'Sim')
                setCounter3 (dadosVac3.length)
                const dadosVac4 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 4 && item.statusVac === 'Sim')
                setCounter4 (dadosVac4.length)
                const dadosVac5 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 5 && item.statusVac === 'Sim')
                setCounter5 (dadosVac5.length)
                const dadosVac6 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 6 && item.statusVac === 'Sim')
                setCounter6 (dadosVac6.length)
                const dadosVac7 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 7 && item.statusVac === 'Sim')
                setCounter7 (dadosVac7.length)
                const dadosVac8 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 8 && item.statusVac === 'Sim')
                setCounter8 (dadosVac8.length)
                const dadosVac9 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 9 && item.statusVac === 'Sim')
                setCounter9 (dadosVac9.length)
                const dadosVac10 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 10 && item.statusVac === 'Sim')
                setCounter10 (dadosVac10.length)
                const dadosVac11 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 11 && item.statusVac === 'Sim')
                setCounter11 (dadosVac11.length)
                const dadosVac12 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 12 && item.statusVac === 'Sim')
                setCounter12 (dadosVac12.length)
                const dadosVac13 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 13 && item.statusVac === 'Sim')
                setCounter13 (dadosVac13.length)
                const dadosVac14 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 14 && item.statusVac === 'Sim')
                setCounter14 (dadosVac14.length)
                const dadosVac15 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 15 && item.statusVac === 'Sim')
                setCounter15 (dadosVac15.length)
                const dadosVac16 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 16 && item.statusVac === 'Sim')
                setCounter16 (dadosVac16.length)
                const dadosVac17 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 17 && item.statusVac === 'Sim')
                setCounter17 (dadosVac17.length)
                const dadosVac18 = tabelaVac.filter(item => item.estadoVac === estado && item.id === 18 && item.statusVac === 'Sim')
                setCounter18 (dadosVac18.length)

            })
        })

        useEffect(() => {
            setLoading(false);
        }, []);

        if (loading) {
            return <div>Carregando...</div>;
        }

        const estados = [
            {nome: "Acre"},
            {nome: "Alagoas"},
            {nome: "Amapá"},
            {nome: "Amazonas"},
            {nome: "Bahia"},
            {nome: "Ceará"},
            {nome: "Distrito Federal"},
            {nome: "Espírito Santo"},
            {nome: "Goiás"},
            {nome: "Maranhão"},
            {nome: "Mato Grosso"},
            {nome: "Mato Grosso do Sul"},
            {nome: "Minas Gerais"},
            {nome: "Pará"},
            {nome: "Paraíba"},
            {nome: "Paraná"},
            {nome: "Pernambuco"},
            {nome: "Piauí"},
            {nome: "Rio de Janeiro"},
            {nome: "Rio Grande do Norte"},
            {nome: "Rio Grande do Sul"},
            {nome: "Rondônia"},
            {nome: "Roraima"},
            {nome: "Santa Catarina"},
            {nome: "São Paulo"},
            {nome: "Sergipe"},
            {nome: "Tocantins"}
        ]


        return (
            <>
                <div className='cabecalhoConhecer'>
                    <h1>Seja bem vindo</h1>
                    <div>
                        <Link href='/'>Home</Link>
                    </div>
                </div>

                <h2 className='subtitulo'>ImunoCheck</h2>

                <p className='texto2'>Selecione uma cidade e saiba quantas pessoas já se vacinaram ali</p>

                <div className='cardTaxa'>
                    <h3>Taxa de vacinação</h3>

                    <div>
                        <label htmlFor="state">Nome do estado:</label><br/>
                        <select id="state" className='opcoesEstado' onChange={handleChange}>
                            <option value="">Selecione um estado</option>
                            {estados.map(estado => (
                            <option key={estado.nome} value={estado.nome}>{estado.nome}</option>
                        ))}
                        </select>
                            
                        <div>
                            <button type='submit' onClick={handleSubmit} className='enviarEstado'>Enviar</button>
                        </div>
                    </div>
                </div>

                {mostrar && (              
                    <table className='tabela'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome da vacina</th>
                                <th>Proteção</th>
                                <th>Qtde de vacinados</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>BCG</td>
                                <td>Tuberculose</td>
                                <td>{counter1}</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Hepatite B</td>
                                <td>Hepatite B</td>
                                <td>{counter2}</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Pentavalente</td>
                                <td>DTP, Hib e HBV</td>
                                <td>{counter3}</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>VIP/VOP</td>
                                <td>Poliomelite</td>
                                <td>{counter4}</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Pneumocócica 10-valente</td>
                                <td>Doenças pulmonares</td>
                                <td>{counter5}</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>Meningicócica C</td>
                                <td>Meningococo</td>
                                <td>{counter6}</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>Rotavírus</td>
                                <td>Rotavírus</td>
                                <td>{counter7}</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>Tríplice viral</td>
                                <td>Sarampo, caxumba e rubéola</td>
                                <td>{counter8}</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>Hepatite A</td>
                                <td>Hepatite A</td>
                                <td>{counter9}</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td>DTP</td>
                                <td>Difteria, tétano e coqueluche</td>
                                <td>{counter10}</td>
                            </tr>

                            <tr>
                                <td>11</td>
                                <td>Varicela</td>
                                <td>Catapora</td>
                                <td>{counter11}</td>
                            </tr>

                            <tr>
                                <td>12</td>
                                <td>Febre amarela</td>
                                <td>Febre amarela</td>
                                <td>{counter12}</td>
                            </tr>

                            <tr>
                                <td>13</td>
                                <td>HPV</td>
                                <td>HPV</td>
                                <td>{counter13}</td>
                            </tr>

                            <tr>
                                <td>14</td>
                                <td>Hepatite B</td>
                                <td>Hepatite B</td>
                                <td>{counter14}</td>
                            </tr>

                            <tr>
                                <td>15</td>
                                <td>Tríplice viral</td>
                                <td>Sarampo, caxumba e rubéola</td>
                                <td>{counter15}</td>
                            </tr>

                            <tr>
                                <td>16</td>
                                <td>Tríplice viral</td>
                                <td>Sarampo, caxumba e rubéola</td>
                                <td>{counter16}</td>
                            </tr>

                            <tr>
                                <td>17</td>
                                <td>Dupla adulto</td>
                                <td>Difteria e tétano</td>
                                <td>{counter17}</td>
                            </tr>

                            <tr>
                                <td>18</td>
                                <td>Influenza</td>
                                <td>Gripe</td>
                                <td>{counter18}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
        </>
    )
}