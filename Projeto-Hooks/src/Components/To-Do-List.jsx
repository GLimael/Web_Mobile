import { useState } from "react";

export default function ToDo() {
    const [tarefa, setTarefa] = useState("");
    const [lista, setLista] = useState([]);

    const enterKey = (event) => {
        if (event.key === 'Enter') {
            adicionarTarefa();
        }
    };

    const adicionarTarefa = () => {
        if (tarefa.trim() != "") {
            setLista([...lista, tarefa]);
            setTarefa("");
        }
    };

    const mudarTema = () => {
        
    }

    return (
        <div>
            <h1>Lista de Tarefas {tarefa}</h1>
            <input type="text" placeholder="Digite sua tarefa!" value={tarefa} onInput={event => setTarefa(event.target.value)} className="input" onKeyPress={enterKey} />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {
                    lista.map((nome, i) => (
                        <li key={i}>
                            <p>{nome}</p>
                        </li>
                    ))
                }
            </ul>
            <button onClick={mudarTema} />
        </div>
    )
}