import {ChangeEventHandler, KeyboardEventHandler, useState} from "react";

type TUseEditToDoProps = {
  readonly onUpdate: (prev: string, next: string) => void;
  readonly item: string;
}

export default function useEditToDo({onUpdate, item}: TUseEditToDoProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const {target: {value}} = e;
    setUpdatedItem(value);
  };

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = e => {
    const {key} = e;

    if (key === 'Enter')
      onUpdate(item, updatedItem);
  };

  const openEdit = () => setEditOpen(true);

  const closeEdit = () => {
    setEditOpen(false);
    setUpdatedItem(item);
  };

  return {
    updatedItem,
    closeEdit,
    editOpen,
    openEdit,
    onChange,
    onKeyUp
  };
}