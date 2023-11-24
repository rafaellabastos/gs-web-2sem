"use client";
import Link from 'next/link';
import ModalDesejo from '../../components/ModalDesejo/ModalDesejo';
import { useEffect, useState } from 'react';

export default function ManipularVacinas() {
    const [status1, setStatus1] = useState("");
    const [status2, setStatus2] = useState("");
    const [status3, setStatus3] = useState("");
    const [status4, setStatus4] = useState("");
    const [status5, setStatus5] = useState("");
    const [status6, setStatus6] = useState("");
    const [status7, setStatus7] = useState("");
    const [status8, setStatus8] = useState("");
    const [status9, setStatus9] = useState("");
    const [status10, setStatus10] = useState("");
    const [status11, setStatus11] = useState("");
    const [status12, setStatus12] = useState("");
    const [status13, setStatus13] = useState("");
    const [status14, setStatus14] = useState("");
    const [status15, setStatus15] = useState("");
    const [status16, setStatus16] = useState("");
    const [status17, setStatus17] = useState("");
    const [status18, setStatus18] = useState("");
    const [isModalDesejoOpen, setIsModalDesejoOpen] = useState(false);

    useEffect((e) => {
        const fetchData = async () => {
            try {
                const verificaUser = sessionStorage.getItem("user");
                const usuario = String(verificaUser);

                if (verificaUser === null ) {
                    window.location.href = "/login";
                    return;
                }

                const response = await fetch(`http://localhost:3000/dados/vacinacao-api`, {
                    method: "get"
                });

                if (!response.ok) {
                    console.error("Erro ao obter dados:", response.statusText);
                    return;
                }

                const tabelaUsuarios = await response.json();
                console.log(tabelaUsuarios)
                const vacina1 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '1');
                if (vacina1.length > 0) {
                    setStatus1(vacina1[0].statusVac);
                }
                else{
                    setStatus1("Não informado")
                }
                const vacina2 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '2');
                setStatus2(vacina2.statusVac);
                if (vacina2.length > 0) {
                    setStatus2(vacina2[0].statusVac);
                }
                else{
                    setStatus2("Não informado")
                }
                const vacina3 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '3');
                setStatus3(vacina3.statusVac);
                if (vacina3.length > 0) {
                    setStatus3(vacina3[0].statusVac);
                }
                else{
                    setStatus3("Não informado")
                }
                const vacina4 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '4');
                if (vacina4.length > 0) {
                    setStatus4(vacina4[0].statusVac);
                } else {
                    setStatus4("Não informado");
                }
                const vacina5 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '5');
                if (vacina5.length > 0) {
                    setStatus5(vacina5[0].statusVac);
                } else {
                    setStatus5("Não informado");
                }
                const vacina6 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '6');
                if (vacina6.length > 0) {
                    setStatus6(vacina6[0].statusVac);
                } else {
                    setStatus6("Não informado");
                }
                const vacina7 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '7');
                if (vacina7.length > 0) {
                    setStatus7(vacina7[0].statusVac);
                } else {
                    setStatus7("Não informado");
                }
                const vacina8 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '8');
                if (vacina8.length > 0) {
                    setStatus8(vacina8[0].statusVac);
                } else {
                    setStatus8("Não informado");
                }
                const vacina9 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '9');
                if (vacina9.length > 0) {
                    setStatus9(vacina9[0].statusVac);
                } else {
                    setStatus9("Não informado");
                }
                const vacina10 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '10');
                if (vacina10.length > 0) {
                    setStatus10(vacina10[0].statusVac);
                } else {
                    setStatus10("Não informado");
                }
                const vacina11 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '11');
                if (vacina11.length > 0) {
                    setStatus11(vacina11[0].statusVac);
                } else {
                    setStatus11("Não informado");
                }
                const vacina12 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '12');
                if (vacina12.length > 0) {
                    setStatus12(vacina12[0].statusVac);
                } else {
                    setStatus12("Não informado");
                }
                const vacina13 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '13');
                if (vacina13.length > 0) {
                    setStatus13(vacina13[0].statusVac);
                } else {
                    setStatus13("Não informado");
                }
                const vacina14 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '14');
                if (vacina14.length > 0) {
                    setStatus14(vacina14[0].statusVac);
                } else {
                    setStatus14("Não informado");
                }
                const vacina15 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '15');
                if (vacina15.length > 0) {
                    setStatus15(vacina15[0].statusVac);
                } else {
                    setStatus15("Não informado");
                }
                const vacina16 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '16');
                if (vacina16.length > 0) {
                    setStatus16(vacina16[0].statusVac);
                } else {
                    setStatus16("Não informado");
                }
                const vacina17 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '17');
                if (vacina17.length > 0) {
                    setStatus17(vacina17[0].statusVac);
                } else {
                    setStatus17("Não informado");
                }
                const vacina18 = tabelaUsuarios.filter(item => item.usuarioVac === usuario && item.id === '18');
                if (vacina18.length > 0) {
                    setStatus18(vacina18[0].statusVac);
                } else {
                    setStatus18("Não informado");
                }
                
            } catch (error) {
                console.error("Erro ao obter dados:", error);
            }
        };

        fetchData()
    }, []);


    const handleCheckButtonClick = () => {
        setIsModalDesejoOpen(true);
    }

    return (
        <>
            <div className='cabecalhoConhecer'>
                <h1>Seja bem vindo!</h1>
                <div>
                    <Link href="/">Home</Link> 
                </div>
            </div>

            <h2 className='subtitulo'>ImunoCheck</h2>

            <p className='texto2'>Clique no botão para para inserir, excluir ou alterar uma informação: </p>

            <button type='submit' className='escolherDesejo' onClick={handleCheckButtonClick}>Check</button>

            {isModalDesejoOpen && <ModalDesejo setOpenModalDesejo={setIsModalDesejoOpen}></ModalDesejo>}

            <table className='tabela'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome da vacina</th>
                        <th>Proteção</th>
                        <th>Quando tomar</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>BCG</td>
                        <td>Tuberculose</td>
                        <td>Infância</td>
                        <td>{status1}</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Hepatite B</td>
                        <td>Hepatite B</td>
                        <td>Infantil</td>
                        <td>{status2}</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Pentavalente</td>
                        <td>DTP, Hib e HBV</td>
                        <td>Infantil</td>
                        <td>{status3}</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>VIP/VOP</td>
                        <td>Poliomelite</td>
                        <td>Infantil</td>
                        <td>{status4}</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Pneumocócica 10-valente</td>
                        <td>Doenças pulmonares</td>
                        <td>Infantil</td>
                        <td>{status5}</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Meningicócica C</td>
                        <td>Meningococo</td>
                        <td>Infantil</td>
                        <td>{status6}</td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Rotavírus</td>
                        <td>Rotavírus</td>
                        <td>Infantil</td>
                        <td>{status7}</td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td>Infantil</td>
                        <td>{status8}</td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>Hepatite A</td>
                        <td>Hepatite A</td>
                        <td>Infantil</td>
                        <td>{status9}</td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>DTP</td>
                        <td>Difteria, tétano e coqueluche</td>
                        <td>Infantil</td>
                        <td>{status10}</td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>Varicela</td>
                        <td>Catapora</td>
                        <td>Infantil</td>
                        <td>{status11}</td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>Febre amarela</td>
                        <td>Febre amarela</td>
                        <td>A partir dos 9 meses</td>
                        <td>{status12}</td>
                    </tr>

                    <tr>
                        <td>13</td>
                        <td>HPV</td>
                        <td>HPV</td>
                        <td>A partir dos 9 anos</td>
                        <td>{status13}</td>
                    </tr>

                    <tr>
                        <td>14</td>
                        <td>Hepatite B</td>
                        <td>Hepatite B</td>
                        <td>Adolescência</td>
                        <td>{status14}</td>
                    </tr>

                    <tr>
                        <td>15</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td>Adolescência</td>
                        <td>{status15}</td>
                    </tr>

                    <tr>
                        <td>16</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td>Adulto</td>
                        <td>{status16}</td>
                    </tr>

                    <tr>
                        <td>17</td>
                        <td>Dupla adulto</td>
                        <td>Difteria e tétano</td>
                        <td>Adulto</td>
                        <td>{status17}</td>
                    </tr>

                    <tr>
                        <td>18</td>
                        <td>Influenza</td>
                        <td>Gripe</td>
                        <td>Anual</td>
                        <td>{status18}</td>
                    </tr>
                </tbody>
            </table> 
        </>
    )
}