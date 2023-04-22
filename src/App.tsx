import classes from './css/App.module.css';
import {NewToDo} from "./components/NewToDo";
import {ToDoItem} from "./components/ToDoItem";
import useToDoList from "./hooks/useToDoList";
import React from 'react';

function App() {
  const {onAddNewToDo, onDelete, onUpdate, toDoList} = useToDoList();

  return (
    <div className={classes.appContainer}>
      <NewToDo onAddNewToDo={onAddNewToDo} />
      <ul className={classes.ToDoList}>
        {toDoList.map(d => (
          <ToDoItem
            onDelete={onDelete}
            onUpdate={onUpdate}
            item={d}
            key={d}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;


