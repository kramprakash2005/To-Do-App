import React, { useState } from "react"

function ToDo(){

    const [task,setTask] = useState(["t1","t2","t3"])
    const [newtask,setNewtask] = useState("")

    function handleInputChange(event){
        setNewtask(event.target.value)
    }

    function addTask(){
        if(newtask.trim() !== ""){
            setTask(t => [...t,newtask])
            setNewtask("")
        }
    }

    function deleteTask(index){
        const updatedtask = task.filter((_,i) => i!==index)
        setTask(updatedtask)
    }

    function moveUp(index){
        if (index === 0) return;
        const updatedTasks = [...task];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTask(updatedTasks);
    }

    function moveDown(index){
        if (index === task.length - 1) return;
        const updatedTasks = [...task];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTask(updatedTasks);
    }
    return (
        <div className="todo-container">
            <h1 className="heading">My ToDo of the Day</h1>
            <div className="input-section">
                <input 
                    type="text" 
                    className="input-box" 
                    value={newtask} 
                    placeholder="Enter New Task"
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>ADD TASK</button>
            </div>

            <div className="list-task">
                <ol className="list-component">
                    {task.map((task, index) => (
                        <li key={index}>
                            <span className="task-text">{task}</span>
                            <div className="button-container">
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete Task</button>
                                <button className="move-button" onClick={() => moveUp(index)}>☝️</button>
                                <button className="move-button" onClick={() => moveDown(index)}>👇</button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );

}
export default ToDo