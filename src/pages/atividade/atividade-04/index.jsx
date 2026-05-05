import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade04() {
    const [qtd, setQtd]   = useState();
    const [produto, setProduto] = useState('');
    const [cadastros, setCadastros] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCadastros([...cadastros, qtd,'x ' , produto])
    };
    
    return (
        <div className={styles.container}>

            <p>Atividade 4 - Lista de compra</p>

            <form onSubmit={handleSubmit} className={styles.formulario}>

              <div className={styles.input}>
                <input
                    id="qtd"
                    type="number"
                    placeholder='Qtd'
                    value={qtd}
                    onChange={e => setNome(e.target.value)}
                />

                <input
                    id="produto"
                    type="text"
                    placeholder='Produto'
                    value={produto}
                    onChange={e => setNome(e.target.value)}
                />
                <button type="submit">Enviar Cadastro</button>
              </div>

            </form>

          <div className={styles.lista}>
            {
                cadastros.map(item => <p key={item}>{item}</p>)
            }
          </div>

        </div>
    );
}