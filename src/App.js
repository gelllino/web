import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
      setNovaTarefa('');
    }
  };

  const alternarTarefa = (index) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index].concluida = !tarefasAtualizadas[index].concluida;
    setTarefas(tarefasAtualizadas);
  };

  const removerTarefasConcluidas = () => {
    const tarefasAtualizadas = tarefas.filter((tarefa) => !tarefa.concluida);
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div className="App">
      <h1>TO DO LIST BY GELL</h1>
      <p>Clique na tarefa para conclui-la...</p>

      <div className="entrada-tarefa">
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className="lista-tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={index} className={tarefa.concluida ? 'concluida' : ''}>
            <span onClick={() => alternarTarefa(index)}>{tarefa.texto}</span>
          </li>
        ))}
      </ul>

      <button onClick={removerTarefasConcluidas} className="botao-remover">
        Remover Tarefas Concluídas
      </button>
    </div>
  );
}

export default App;
