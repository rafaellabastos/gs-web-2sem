import { promises as fs} from 'fs'
import { NextResponse } from 'next/server';


export async function POST(request) {
    const {nome, idade, estado, usuario, senha} = await request.json();

    const file = await  fs.readFile(process.cwd() + '/src/app/dados/base-usuarios/db.json', 'utf8');
    const data = JSON.parse(file);

    const novoCadastro = {
        nome,
        idade,
        estado,
        usuario,
        senha,
    };

    data.usuarios.push(novoCadastro);

    await fs.writeFile(process.cwd() + '/src/app/dados/base-usuarios/db.json', JSON.stringify(data));


  return NextResponse.json({message: "Cadastrado com sucesso!"})
}
