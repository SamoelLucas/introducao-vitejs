import { useState } from "react";

import styles from './index.module.css';

export default function Atividade03() {  

    const [acao, setAcao] = useState("");

    function handleCadastrar () {
        setAcao("Cadastrar");
    }
    function handleEditar () {
        setAcao("Editar");
    }
    function handleListar () {
        setAcao("Listar");
    }
    function handleExcluir () {
        setAcao("Excluir");
    }
    function handleCancelar () {
        setAcao("Cancelar");
    }

    return (
      <div className={styles.container}>
         <div>
            <h1>Atividade 3</h1>
            <h2>{`Ação selecionada: ${acao}`}</h2>
         </div>
        <div className={styles.containerOperacoes}>
            <label 
                onClick={() => handleCadastrar()}
                className={styles.botao1}
            >Cadastrar</label>
            <label 
                onClick={() => handleEditar()}
                className={styles.botao2}
            >Editar</label>
            <label 
                onClick={() => handleListar()}
                className={styles.botao3}
            >Listar</label>
            <label 
                onClick={() => handleExcluir()}
                className={styles.botao4}
            >Excluir</label>
            <label 
                onClick={() => handleCancelar()}
                className={styles.botao5}
            >Cancelar</label>
        </div>
      </div>
    );
}