import React, { useState } from 'react';

const Todolist = React.memo(() => {
    const [tasks, setTasks] = useState(["Eat breakfast", "take shower", "walk the dog"]);
    const [newTask , setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div>
            <h1 className='text-purple-600'>TO-DO-LIST</h1>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Todolist;