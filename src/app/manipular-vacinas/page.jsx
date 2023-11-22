"use client";

import Link from 'next/link';
import ModalDesejo from '../../components/ModalDesejo/ModalDesejo';
import { useState } from 'react';

export default function ManipularVacinas() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckButtonClick = () => {
        setIsModalOpen(true);
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

            {isModalOpen && <ModalDesejo setOpen={setIsModalOpen}></ModalDesejo>}

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
                        <td></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Hepatite B</td>
                        <td>Hepatite B</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Pentavalente</td>
                        <td>DTP, Hib e HBV</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>VIP/VOP</td>
                        <td>Poliomelite</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Pneumocócica 10-valente</td>
                        <td>Doenças pulmonares</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Meningicócica C</td>
                        <td>Meningococo</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Rotavírus</td>
                        <td>Rotavírus</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>Hepatite A</td>
                        <td>Hepatite A</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>DTP</td>
                        <td>Difteria, tétano e coqueluche</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>Varicela</td>
                        <td>Catapora</td>
                        <td>Infantil</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>Febre amarela</td>
                        <td>Febre amarela</td>
                        <td>A partir dos 9 meses</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>13</td>
                        <td>HPV</td>
                        <td>HPV</td>
                        <td>A partir dos 9 anos</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>14</td>
                        <td>Hepatite B</td>
                        <td>Hepatite B</td>
                        <td>Adolescência</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>15</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td>Adolescência</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>16</td>
                        <td>Tríplice viral</td>
                        <td>Sarampo, caxumba e rubéola</td>
                        <td>Adulto</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>17</td>
                        <td>Dupla adulto</td>
                        <td>Difteria e tétano</td>
                        <td>Adulto</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>18</td>
                        <td>Influenza</td>
                        <td>Gripe</td>
                        <td>Anual</td>
                        <td></td>
                    </tr>
                </tbody>
            </table> 
        </>
    )
}