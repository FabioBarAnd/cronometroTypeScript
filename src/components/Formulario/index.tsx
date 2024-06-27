import React, { useState } from "react";
import Botao from "../Botao";
import styles from './Formulario.module.scss';
import { ITafera } from "../../types/tarefa";
import { v4 as uuidv4} from 'uuid';

interface FormularioProps {
        setTarefas: React.Dispatch<React.SetStateAction<ITafera[]>>
}

function Formulario({setTarefas}: FormularioProps) {
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00")

    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        setTarefa("");
        setTempo("00:00");
    }

    return(
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
                <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

//htmlFor invoca o input

export default Formulario;