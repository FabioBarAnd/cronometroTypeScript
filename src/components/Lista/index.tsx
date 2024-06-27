import Item from './Item';
import styles from './Lista.module.scss';
import { ITafera } from '../../types/tarefa';

interface Props {
    tarefas: ITafera[],
    selecionaTarefa: (tarefaSelecionada: ITafera) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Item   
                        selecionaTarefa={selecionaTarefa}
                        key={tarefa.id}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;