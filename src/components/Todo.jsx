import { useState } from 'react';
import {BsPlus, BsSearch} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addTodo, searchTask } from '../redux/Actions';
import FilterButton from './FilterButton';
import TaskList from './TaskList';

const Todo = () => {
    const [todoTask, setTodoTask] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleAddToDo = (text) => {
        dispatch(addTodo(text))
    }

    const handleAddTask = () => {
        if(todoTask.trim() !== ""){
            handleAddToDo(todoTask.trim());
            setTodoTask("");
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(searchTask(value));
    }

  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>TO-DO WEB APP</h2>

      <div className='flex items-center mb-4'>
        <input value={todoTask} onChange={(e) => setTodoTask(e.target.value)} type="text" name='text' id='addTodoInput' placeholder='Add your task' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500'/>
        <button className='ml-4 p-2 bg-cyan-500 text-white rounded hover:bg-blue-600 focus:outline-none' onClick={handleAddTask}><BsPlus size={15}/></button>
      </div>

      <div className='flex items-center justify-between'>
       <FilterButton/>
        <div className='flex items-center mb-4'>
            <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name='text' id='addTodoInput' placeholder='Search task' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500'/>
            <button className='ml-4 p-2 bg-cyan-500 text-white rounded hover:bg-blue-600 focus:outline-none'><BsSearch size={15}/></button>
        </div>
      </div>
      <TaskList/>
    </div>
  )
}

export default Todo
