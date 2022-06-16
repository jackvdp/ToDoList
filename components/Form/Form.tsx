import React, { useState } from "react"

export default function Form(props: FormProps) {

  const [input, setInput] = useState("")

  function submitTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.callback(input)
    setInput("")
  }

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value)
  }

  return (
    <form onSubmit={submitTask}>
      <input onChange={handleInputChange} value={input} type="text" placeholder="Please write a task"/>
      <button type="submit">Submit</button>
    </form>
  )
}

interface FormProps {
  callback: ((_: string) => void)
}
