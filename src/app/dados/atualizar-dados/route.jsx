
import { promises as fs} from 'fs'
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const  dados = await request.json(); // Extrai a propriedade 'dados'
        const usuarios = JSON.parse(dados);

        const file = await fs.readFile(process.cwd() + '/src/app/dados/base-vacinacao/db.json', 'utf8');
        const data = JSON.parse(file);
        data.vacinados = usuarios;

        await fs.writeFile(process.cwd() + '/src/app/dados/base-vacinacao/db.json', JSON.stringify(data));
        return NextResponse.json({ message: 'Atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        return NextResponse.json({ message: 'Erro ao processar a solicitação.' });
    }
}