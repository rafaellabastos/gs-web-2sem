import { promises as fs} from 'fs'
import { NextResponse } from 'next/server';


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
