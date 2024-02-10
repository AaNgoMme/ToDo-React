import './todoitem.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateToDo } from '../../store/store';
import { IProps, IToDoItemStore } from '../../Form';



export function ToDoItem({ title, done, id }: IProps) {

  const toDoItemStore = useSelector<IToDoItemStore, IProps[]>(state => state.toDoItemStore)
  const dispatch = useDispatch()

  function handleClick() {
    for (let i = 0; i < toDoItemStore.length; i++) {
      if (toDoItemStore[i].id === id) {
        toDoItemStore.splice(i, 1);
        dispatch(updateToDo([...toDoItemStore]))
      }
    }
  }

  function handleDone() {
    for (let i = 0; i < toDoItemStore.length; i++) {
      if (toDoItemStore[i].id === id) {
        toDoItemStore[i].done = !done;
        dispatch(updateToDo([...toDoItemStore]))
      }
    }
  }

  return (
    <li className={done ? "item item_bg" : "item"}>
      <h3 className="item-title">{title}</h3>
      <div className="item-buttons">
        <button className="btn btn_done" onClick={handleDone}>Готво</button>
        <button className="btn btn_delete" onClick={handleClick}>Удалить</button>
      </div>
    </li>
  );
}
