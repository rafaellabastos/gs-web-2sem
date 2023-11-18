import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='cabecalhoHome'>
        <Link href=''>Login</Link>
        <Link href=''>Cadastro</Link>
      </div>

      <p>Por um mundo onde todos possam viver o que tiver para viver!</p>

      <div>
        <figure>
          <Image src='/images/vacina.jpg'
            width={514}
            height={239}
            alt="Mão com uma agulha pegando a vacina dentro de um pote">
          </Image>

          <div>
            <Link href=''>Venha ter um controle vacinal</Link>
          </div>
        </figure>
      </div>

      <p>Saiba a taxa de vacinação das cidades</p>

      <div>
        <div>
          <Link href=''>Conheça as principais vacinas</Link>
        </div>

        <figure>
          <Image src='/images/vidrovacina.jpg'
            width={514}
            height={239}
            alt="Muitos potes de vacina enfileirados">
          </Image>
        </figure>
      </div>
    </>    
  )
}
