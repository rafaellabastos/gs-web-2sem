"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AcompanharCasos() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({estados: [] });

    useEffect(() => {
        fetch('/cidades.json')
            .then(response => response.json())
            .then(data => {
                const selectCidade = document.getElementById('city');

                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.text = 'Selecione uma cidade';
                selectCidade.appendChild(defaultOption);

                data.estados.forEach(estado => {
                    estado.cidades.forEach(cidade => {
                        const option = document.createElement('option');
                        option.value = cidade;
                        option.text = cidade;
                        selectCidade.appendChild(option);
                    });
                });
                setLoading(false);
            })
            .catch(error => console.error('Erro ao carregar cidades: ', error));
        }, []);   

    return (
        <>
            <h1>Seja bem vindo</h1>
            <Link href='/'>Home</Link>

            <h2>ImunoCheck</h2>

            <p>Selecione uma cidade e saiba quantas pessoas já se vacinaram ali</p>

            <div>
                <h3>Taxa de vacinação</h3>
                {!loading && (
                    <div>
                        <label htmlFor="city">Nome da cidade:</label>
                        <select id="city">
                            <option value="">Selecione uma cidade</option>
                            {data.estados.map(estado => (
                                estado.cidades.map(cidade => (
                                    <option key={cidade} value={cidade}>{cidade}</option>
                                ))
                            ))}
                        </select>

                        <div>
                            <button type='submit'>Enviar</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}