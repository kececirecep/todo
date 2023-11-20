import './App.css';
import Header from './components/Header';
import { BsTrash3 } from "react-icons/bs";
import { RiAddCircleLine } from "react-icons/ri";
import { useState } from 'react';

function App() {
  const [task, setTask] = useState([{ id: 1, text: "Recep", completed: false }]);
  const [inputValue, setInputValue] = useState("")

  const addTask = () => {
    if (inputValue === "") {
      alert("Eklemek istediğiniz görevi giriniz.");
    } else if (task.some((item) => item.text === inputValue)) {
      alert("Aynı görev zaten mevcut, lütfen kontrol edin.");
      setInputValue("");
    } else {
      const newTask = {
        id: task.length + 1,
        text: inputValue,
        completed: false,
      };
      setTask([...task, newTask]);
      setInputValue("");
    }
  };

  const removeTask = (getIndex) => {
    setTask(task.filter((item) => item.id !== getIndex))
  }
  const toggleCompleted = (id) => {
    const updatedTodos = task.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTask(updatedTodos);
  };

  const allClear = () => {
    const getQuestion = window.confirm("Silmek İstediğinize Emin Misiniz?")
    if (getQuestion) {
      setTask([])
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='flex justify-center items-center gap-2 m-[-25px] mb-10'>
        <input type="text" placeholder='Add a new task' className='bg-[#262626] text-gray-300 border p-2 rounded-md' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className='flex items-center gap-1 bg-[#1E6F9F] text-lg text-white p-2 rounded-md' onClick={addTask}>Add <RiAddCircleLine /></button>
      </div>
      <div className='flex justify-center items-center gap-12'>
        <h1 className=''>Total Todo: <span className='text-xl text-green-500 font-semibold'>{task.length}</span></h1>
        <button className=' px-4 py-1 bg-red-500 rounded hover:bg-red-700' onClick={() => allClear()}>All Clear</button>
      </div>
      {
        task.map(item => {
          if (item.completed === false) {
            return (
              <div key={item.id} className='flex justify-center'>
                <div className='flex justify-start items-center bg-[#333333] w-1/4 p-3 rounded-2xl mt-4'>
                  <p className='pl-2 flex' onClick={() => toggleCompleted(item.id)} style={{ textDecoration: item.completed ? 'line-through' : 'none', cursor: 'pointer', }}>{item.text} </p>
                </div>
                <button className='p-2 ml-4 mt-5 bg-red-500 rounded-full w-10 h-10 flex justify-center items-center' onClick={() => removeTask(item.id)}><BsTrash3 /></button>
              </div>
            )
          }


        })
      }
      <div className=''>
        <h3 className='text-center mt-10'>Tamamlananlar</h3>
        {
          task.map(item => {

            if (item.completed) {
              return (
                <div key={item.id} className='flex justify-center'>
                  <div className='flex justify-start items-center bg-green-900 w-1/4 p-3 rounded-2xl mt-4'>
                    <p className='pl-2 flex' onClick={() => toggleCompleted(item.id)} style={{ textDecoration: item.completed ? 'line-through' : 'none', cursor: 'pointer', }}>{item.text} </p>
                  </div>
                  <button className='p-2 ml-4 mt-5 bg-red-500 rounded-full w-10 h-10 flex justify-center items-center' onClick={() => removeTask(item.id)}><BsTrash3 /></button>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
