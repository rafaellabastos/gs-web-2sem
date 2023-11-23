"use client"

import { promises as fs} from 'fs'
import { NextResponse } from 'next/server';
import { useState } from 'react';


export async function POST(request) {
    const {usuarioVac, estadoVac, id, statusVac } = await request.json();

    const file = await  fs.readFile(process.cwd() + '/src/app/dados/base-vacinacao/db.json', 'utf8');
    const data = JSON.parse(file);

    const novoCadastro = {
        usuarioVac,
        estadoVac,
        id,
        statusVac,
    };

    data.vacinados.push(novoCadastro);

    await fs.writeFile(process.cwd() + '/src/app/dados/base-vacinacao/db.json', JSON.stringify(data));


  return NextResponse.json({message: "Cadastrado com sucesso!"})
}

export async function DELETE(){
    const file = await  fs.readFile(process.cwd() + '/src/app/dados/base-vacinacao/db.json', 'utf8');
    const data = JSON.parse(file);
    const usuarioCadastrado = sessionStorage.getItem("user")
    const usuario = usuarioCadastrado.replace(/^\["|"\]$/g, '')
    const idDeletado = sessionStorage.getItem("id")
    const idDelete = idDeletado.replace(/^\["|"\]$/g, '')
    const usuarioVac = data.map((dados) => dados.usuarioVac === usuario) 
    const id = data.map((dados) => dados.id === idDelete)

    const [dadosUsuario, setDadosUsuario] = useState([])
    const [dadosExcluidos, setDadosExcluidos] = useState([dadosUsuario])
    setDadosUsuario(data.filter((dados) => dados.usuarioVac === usuario && dados.id === id))



    setDadosExcluidos(() => (
    {
        usuarioVac: usuarioVac,
        estadoVac : "",
        id: id,
        statusVac : "",
    }
    ))
       

    data.vacinados.push(novoCadastro);

    await fs.writeFile(process.cwd() + '/src/app/dados/base-vacinacao/db.json', JSON.stringify(dadosExcluidos));


  return NextResponse.json({message: "Excluido com sucesso!"})
}
