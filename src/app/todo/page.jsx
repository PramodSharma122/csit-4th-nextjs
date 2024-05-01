"use client";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  // runs on input value change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // executes on button click
  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, inputText]);
      setInputText("");
    }
  };

  // deletes a todo item
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((item) => item !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="flex mt-5 w-full min-h-screen flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-extrabold text-blue-300 mb-5">Todo List App</h1>
        <div className="flex gap-4">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Add a new todo..."
            className="outline-none border-2 border-gray-500 focus:border-blue-500 py-2 px-4 rounded"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 items-center gap-1 flex px-4 py-2 text-white font-semibold rounded"
          >
            Add Todo
            <FaPlus />
          </button>
        </div>
        <div className="overflow-x-auto mt-0">
          <table className="table">
            <thead>
              <tr className="text-xl text-green-400">
                <th>Todos</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((index)=>(
                <tr key={index}>
                  <td className="w-full text-xl">{index}</td>
                  <td className="flex justify-center">
                    <FiTrash2 onClick={()=>deleteTodo(index)} className="text-red-500 cursor-pointer" size={20} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  </>
  );
}

