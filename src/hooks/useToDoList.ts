import {useState} from "react";

export default function useToDoList() {
  const [toDoList, setToDoList] = useState<string[]>([]);

  const onAddNewToDo = (newItem: string) => {
    const findIndex = toDoList.findIndex(d => d.toLowerCase().trim() === newItem.toLowerCase().trim());

    if (findIndex < 0) {
      const newToDoList = toDoList.concat(newItem);

      setToDoList(newToDoList);
    }
  };

  const onDelete = (toDo: string) => {
    const filteredList = toDoList.filter(d => d.toLowerCase().trim() === toDo.toLowerCase().trim());

    setToDoList(filteredList);
  };

  const onUpdate = (prevToDo: string, newToDo: string) => {
    const findIndex = toDoList.findIndex(d => d.toLowerCase().trim() === prevToDo.toLowerCase().trim());

    if (findIndex < 0)
      return;

    const newData = [...toDoList];
    newData[findIndex] = newToDo;

    setToDoList(newData);
  };

  return {onAddNewToDo, onUpdate, onDelete, toDoList};
}