import { Link } from "react-router";

import styles from './index.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Aula React com VITE JS</h1>            
            <div className={styles.containerItens}>
                <h2>Exemplos</h2>

                <Link to="/exemplo/1">Exemplo 1 - Componente básico</Link>
                <Link to="/exemplo/2">Exemplo 2 - Uso de estilização</Link>
                <Link to="/exemplo/3">Exemplo 3 - Soma e subtração</Link>

            </div>
            <div className={styles.containerItens}>
                <h2>Atividades</h2>
            </div>
        </div>
    )
}

export default Home;