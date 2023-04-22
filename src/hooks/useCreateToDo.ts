import {ChangeEventHandler, KeyboardEventHandler, useMemo, useState} from "react";

export default function useCreateToDo(onAddNewToDo: (d: string) => void) {
  const [newToDo, setNewToDo] = useState('');
  const isDisabled = useMemo(() => newToDo.length <= 0, [newToDo]);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const {target: {value}} = e;

    setNewToDo(value);
  };

  const onAddToDoClick = () => {
    onAddNewToDo(newToDo);
  };

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = e => {
    const {key} = e;

    if (key === 'Enter')
      onAddNewToDo(newToDo);
  };

  return {
    onAddToDoClick,
    isDisabled,
    onChange,
    onKeyUp,
    newToDo
  };
}