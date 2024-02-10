import { ChangeEvent, FormEvent, useState } from 'react';
import './form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateToDo } from '../store/store';

export interface IToDoItemStore {
  toDoItemStore: IProps[];
}

export interface IProps {
  title: string
  done: boolean
  id: number
}

let nextId = 0

export function Form() {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const toDoItemStore = useSelector<IToDoItemStore, IProps[]>(state => state.toDoItemStore)
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (value !== '') {
      dispatch(updateToDo([...toDoItemStore,{
        id: nextId++,
        title: value,
        done: false,
      }]))
    }

    setValue('')
  }
  return (
    <div className='container__form'>
      <h1 className='container__form-title'>
        Список дел
      </h1>
      <form className='form'>
        <input type="text"
          className="form-input"
          placeholder="Введите название нового дела"
          value={value}
          onChange={handleChange}
        />
        <button className="form-btn" onClick={handleSubmit}>Добавить дело</button>
      </form>
    </div>
  );
}
