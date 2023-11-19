import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='cabecalhoHome'>
        <Link href=''>Login</Link>
        <Link href=''>Cadastro</Link>
      </div>

      <p className='texto1'>Por um mundo onde todos possam viver o que tiver para viver!</p>

      <div className='grupoVacina'>
        <figure className='fotoVacina'>
          <Image src='/images/vacina.jpg'
            width={514}
            height={239}
            alt="Mão com uma agulha pegando a vacina dentro de um pote">
          </Image>

          <div className='cardVacina'>
            <Link href=''>Venha ter um controle vacinal</Link>
          </div>
        </figure>
      </div>

      <div className='botaoHome'>
        <Link href='/acompanhar-casos'>Saiba a taxa de vacinação dos estados</Link>
      </div>

      <div className='grupoPotes'>
        <div className='cardPotes'>
          <Link href=''>Conheça as principais vacinas</Link>
        </div>

        <figure className='fotoPotes'>
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