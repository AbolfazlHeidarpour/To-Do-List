import useCreateToDo from "../hooks/useCreateToDo";
import classes from '../css/NewToDo.module.css';
import {FC} from "react";
import useScreenSize from "../hooks/useScreenSize";

interface INewToDoProps {
  readonly onAddNewToDo: (d: string) => void;
}

export const NewToDo: FC<INewToDoProps> = ({onAddNewToDo}) => {
  const {onAddToDoClick, isDisabled, onChange, onKeyUp, newToDo} = useCreateToDo(onAddNewToDo);
  const {width} = useScreenSize();

  return (
    <div className={classes.NewToDoContainer}>
      <span>
        {width > 470 && <label htmlFor='new-to-do'>Add new task: </label> }
        <input
          className={classes.NewToDoInput}
          onChange={onChange}
          onKeyUp={onKeyUp}
          name='new-to-do'
          value={newToDo}
          id='new-to-do'
        />
      </span>
      <button
        className={classes.NewToDoButton}
        onClick={onAddToDoClick}
        disabled={isDisabled}
      >
        Add
      </button>
    </div>
  );
}