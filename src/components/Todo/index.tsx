import { Pencil, Trash } from "@phosphor-icons/react";
import { useContext, useRef, useState } from "react";
import { ListTodoContext } from "../../hooks/ListTodoProvider";
import { Item } from "./styles";

export function Todo({ task, id, completed }: any) {
  const todoRef = useRef<HTMLInputElement | null>(null)
  const { removeItem, editItem, checkedItem } = useContext(ListTodoContext)
  const [onEdit, setOnEdit] = useState(false)
  const [isCompleted, setIsCompleted] = useState(completed)

  function handleRemoveTodo() {
    removeItem(task)
  }

  function handleEditTodo() {
    setOnEdit(true)
  }

  function handleSaveTodo() {
    if (todoRef.current) {
      const todoValue = todoRef.current.value
      editItem({ id, task: todoValue, completed: false })
      todoRef.current.value = ''
    }
    setOnEdit(false)
  }

  function handleChecked() {
    checkedItem({ id, task, completed: isCompleted })
  }

  if (onEdit) {
    return (
      <Item>
        <div>
          <label htmlFor={task}>
            <input type="text" placeholder="Tarefa..." ref={todoRef} />
          </label>
        </div>
        <div>
          <button onClick={handleSaveTodo}><Pencil size={16} /></button>
        </div>
      </Item>
    )
  } else {
    return (
      <Item>
        <div>
          <label htmlFor={task} className={completed === true ? 'completed-task' : ''}>
            <input
              type="checkbox"
              id={task}
              onChange={() => handleChecked(setIsCompleted(!isCompleted))}
              checked={completed}
            />
            {task}
          </label>
        </div>
        <div>
          <button onClick={handleEditTodo} disabled={completed}><Pencil size={16} /></button>
          <button onClick={handleRemoveTodo} disabled={completed}><Trash size={16} /></button>
        </div>
      </Item>
    )
  }
}