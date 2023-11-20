import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='cabecalhoHome'>
        <Link href='/login'>Login</Link>
        <Link href='/cadastro'>Cadastro</Link>
      </div>

      <p className='texto1'>Por um mundo onde todos possam viver o que tiver para viver!</p>

      <div className='grupoVacina'>
          <div className='cardVacina'>
            <Link href='/login'>Venha ter um controle vacinal</Link>
          </div>
      </div>

      <div className='botaoHome'>
        <Link href='/acompanhar-casos'>Saiba a taxa de vacinação dos estados</Link>
      </div>

      <div className='grupoPotes'>
        <div className='cardPotes'>
          <Link href='/conhecer-vacinas'>Conheça as principais vacinas</Link>
        </div>
      </div>
    </>    
  )
}