"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AcompanharCasos() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({cidades: [] });

    useEffect(() => {
        fetch('/cidades.json')
            .then(response => response.json())
            .then(data => {
                const selectCidade = document.getElementById('city');

                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.text = 'Selecione uma cidade';
                selectCidade.appendChild(defaultOption);

                data.cidades.forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade;
                    option.text = cidade;
                    selectCidade.appendChild(option);
                });
                setLoading(false);
            })
            .catch(error => console.error('Erro ao carregar cidades: ', error));
        }, []);   

    return (
        <>
            <div className='cabecalhoConhecer'>
                <h1>Seja bem vindo</h1>
                <div>
                    <Link href='/'>Home</Link>
                </div>
            </div>

            <h2>ImunoCheck</h2>

            <p className='texto2'>Selecione uma cidade e saiba quantas pessoas já se vacinaram ali</p>

            <div>
                <h3>Taxa de vacinação</h3>
                {!loading && (
                    <div>
                        <label htmlFor="city">Nome da cidade:</label>
                        <select id="city">
                            <option value="">Selecione uma cidade</option>
                            {data.cidades.map(cidade => (
                                <option key={cidade} value={cidade}>{cidade}</option>
                            ))}
                        </select>

                        <div>
                            <button type='submit'>Enviar</button>
                        </div>
                    </div>
                )}
            </div>

            <table>
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
                        <td></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Hepatite B</td>
                        <td>Hepatite B</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Pentavalente</td>
                        <td>DTP, Hib e HBV</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>VIP/VOP</td>
                        <td>Poliomelite</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Pneumocócica 10-valente</td>
                        <td>Doenças pulmonares</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Meningicócica C</td>
                        <td>Meningococo</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Rotavírus</td>
                        <td>Rotavírus</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>Hepatite A</td>
                        <td>Hepatite A</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>DTP</td>
                        <td>Difteria, tétano e coqueluche</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>Varicela</td>
                        <td>Catapora</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>Febre amarela</td>
                        <td>Febre amarela</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>13</td>
                        <td>HPV</td>
                        <td>HPV</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>14</td>
                        <td>Hepatite B</td>
                        <td>Hepatite B</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>15</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>16</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>17</td>
                        <td>Dupla adulto</td>
                        <td>Difteria e tétano</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>18</td>
                        <td>Influenza</td>
                        <td>Gripe</td>
                        <td></td>
                    </tr>
                </tbody>
            </table> 
        </>
    )
}