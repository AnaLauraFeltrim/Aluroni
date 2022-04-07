import styles from './Cardapio.module.scss'

import logoAluroni from 'assets/logo.svg'
import Buscador from './Buscador'
import { useState } from 'react'
import Filtros from './Filtros'
import Ordenador from './Ordenador'
import Itens from './Itens'

export default function Cardapio() {

    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState('')

    return (
        <main>
            <nav className={styles.menu}>
                <img src={logoAluroni} alt='logo aluroni' />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__title}>Cardapio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} ordenador={ordenador} filtro={filtro} />
            </section>
        </main>
    )
}