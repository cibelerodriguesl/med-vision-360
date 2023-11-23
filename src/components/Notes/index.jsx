// TodoList.jsx

import React, { useState } from 'react';
import { NoteListContainer, NoteItem, NoteInput, NoteButton, RemoveButton } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const NoteList = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddTodo = () => {
    if (newTitle.trim() !== '' && newContent.trim() !== '') {
      setTodos([...todos, { title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <NoteListContainer>
      <h2>Lista de Anotações</h2>
      <div>
        <NoteInput
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Título da anotação"
        />
        <NoteInput
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Conteúdo da anotação"
        />
        <NoteButton onClick={handleAddTodo}>
          <FontAwesomeIcon icon={faPlus} />
          Adicionar
        </NoteButton>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <NoteItem key={index}>
            <div>
              <strong>{todo.title}</strong>
              <p>{todo.content}</p>
            </div>
            <RemoveButton onClick={() => handleRemoveTodo(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </RemoveButton>
          </NoteItem>
        ))}
      </ul>
    </NoteListContainer>
  );
};

export default NoteList;