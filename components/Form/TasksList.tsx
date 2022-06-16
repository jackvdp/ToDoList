import React from "react";

export default function TasksList(props: ListProps) {

    let tasks = props.tasks

    return(
        <ol>
            {tasks.map((task, index) =>
                <TaskItem task={task} index={index} callback={props.callback}/>
            )}
        </ol>
    )
}

function TaskItem(props: ItemProp) {

    function removeItem() {
        props.callback(props.index)
    }

    return(
        <div>
            <li>{props.task}</li>
            <button onClick={removeItem}>Done</button>
        </div>
    )
}

interface ListProps {
    tasks: Array<string>
    callback: ((index: number) => void)
}

interface ItemProp {
    task: String
    index: number
    callback: ((index: number) => void)
}