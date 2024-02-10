import './todolist.css';
import { ToDoItem } from './ToDoItem';
import { useSelector } from 'react-redux';
import { IProps, IToDoItemStore } from '../Form';


export function ToDoList() {

  const toDoItemStore = useSelector<IToDoItemStore,IProps[]>(state => state.toDoItemStore)

  return (
    <ul className="list">
      {toDoItemStore.map((el:any, key:number) => (
        <ToDoItem 
        key={toDoItemStore[key].id}
        title={toDoItemStore[key].title}
        done={toDoItemStore[key].done}
        id={toDoItemStore[key].id}
        />  
      ))}
    </ul>
  );
}
