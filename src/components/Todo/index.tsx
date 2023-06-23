import { Pencil, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { ListTodoContext, ListTodoProps } from "../../hooks/ListTodoProvider";
import { Item } from "./styles";

export function Todo({ task }: ListTodoProps) {
  const { removeItem } = useContext(ListTodoContext)
  function handleRemoveTodo(task) {
    removeItem(task)
  }
  return (
    <Item>
      <div>
        <label htmlFor={task}>
          <input type="checkbox" id={task} />
          {task}
        </label>
      </div>
      <div>
        <button><Pencil size={16} /></button>
        <button onClick={handleRemoveTodo}><Trash size={16} /></button>
      </div>
    </Item>
  )
}