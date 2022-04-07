import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';

import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>

}


export default function Ordenador({ ordenador, setOrdenador }: Props) {
    const [state, setState] = useState(false)
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome
    return (
        <button
            onBlur={() => setState(false)}
            onClick={() => setState(!state)}
            className={`${styles.ordenador} ${ordenador !== "" ? styles['ordenador--ativo'] : ''}`}>
            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {state ? <MdKeyboardArrowUp size={20} /> : < MdKeyboardArrowDown size={20} />}
            <div className={`${styles.ordenador__options}  ${state === true ? styles['ordenador__options--ativo'] : ""}`}>
                {opcoes.map(opcao => (
                    <div onClick={() => setOrdenador(opcao.value)} className={styles.ordenador__option} key={opcao.value} >
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}