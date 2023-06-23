import { useContext } from "react";
import { Content } from "./styles";
import { Todo } from "../Todo";
import { ListTodoContext } from "../../hooks/ListTodoProvider";

export function ListTodo() {
  const { todos } = useContext(ListTodoContext)
  console.log(todos)
  return (
    <Content>
      {todos.map((item, i) => (
        <Todo task={item.task} key={i} completed />
      )
      )}
    </Content>
  )
}