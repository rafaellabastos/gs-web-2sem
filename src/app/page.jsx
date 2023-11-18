import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <p>Login</p>
        <p>Cadastro</p>
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
