import "./Rodape.scss";

export default function Rodape() {
    return (
        <div className="rodape">
            {/* Informações sobre os membros da equipe */}
            <div>
                <p>Douglas de Araujo Magalhães - 552008 - Testador/QA |  Gustavo Argüello Bertacci - 551304 - Desenvolvedor</p>
                <p>Igor Ribeiro Anccilotto - 550415 - Suporte Técnico  |  Luiz Fillipe Farias - 99519 - Gerente de projetos</p>
                <p>Rafaella Monique do Carmo Bastos - 552425 - Arquiteta de software</p>
            </div>
            {/* Informação adicional, se necessário */}
            <p>1TDSPL</p>
        </div>
    );
}
