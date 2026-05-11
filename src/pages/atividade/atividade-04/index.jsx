import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade04() {
    const [qtd, setQtd]   = useState('0');
    const [produto, setProduto] = useState('');
    const [cadastros, setCadastros] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoCadastro = {
            qtd,
            produto
        };

        setCadastros([...cadastros, novoCadastro]);

        setQtd('0');
        setProduto('');
    };
    
    return (
        <div className={styles.container}>

            <p>Atividade 4 - Lista de compra</p>

            <form onSubmit={handleSubmit} className={styles.formulario}>

              <div className={styles.input}>
                <input
                className={styles.box1}
                    id="qtd"
                    type="number"
                    placeholder='Qtd'
                    value={qtd}
                    onChange={(e) => setQtd(e.target.value)}
                />

                <input
                className={styles.box2}
                    id="produto"
                    type="text"
                    placeholder='Produto'
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                />

                <button className={styles.button} type="submit">Adicionar</button>
               

              </div>

            </form>

          <div>
            {cadastros.map((item, index) => (
                    <p key={index} className={styles.lista}>
                        {item.qtd}x {item.produto}
                    </p>
                ))}
          </div>

        </div>
    );
}