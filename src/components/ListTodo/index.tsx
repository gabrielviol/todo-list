import { useContext } from "react";
import { Content } from "./styles";
import { Todo } from "../Todo";
import { ListTodoContext } from "../../hooks/ListTodoProvider";

export function ListTodo() {
  const { todos } = useContext(ListTodoContext)
  return (
    todos.length === 0 ?
      (<Content><h2>Não há tarefas.</h2></Content>) :
      (
        <Content>
          {todos.map((item) => (
            <Todo task={item.task} key={item.id} id={item.id} completed={item.completed} />
          )
          )}
        </Content>
      )


  )
}