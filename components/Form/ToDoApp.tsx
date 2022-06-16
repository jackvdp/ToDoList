import React, { useState, useEffect } from "react"
import Form from "./Form"
import TasksList from "./TasksList"
export default function ToDoApp() {

    const [tasks, setTasks] = useState(Array<string>())

    function addTask(task: string) {
        let currentTasks = [...tasks]
        currentTasks.push(task)
        setTasks(currentTasks)
    }

    function removeAt(index: number) {
        let currentTasks = [...tasks]
        currentTasks.splice(index, 1)
        setTasks(currentTasks)
    }

    return (
        <div>
            <h1>Task App</h1>
            <Form callback={addTask}></Form>
            <TasksList tasks={tasks} callback={removeAt}/>
        </div>
    )
}