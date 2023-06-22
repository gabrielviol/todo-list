import { Plus } from "@phosphor-icons/react";
import { AddTodo, Container, Content } from "./style";
import { useContext, useRef } from "react";
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../components/Todo";

export function Grid() {
  const { addTodo, tasks } = useContext(useTodo)
  const todoRef = useRef<HTMLInputElement | null>(null)

  function handleAddTodo() {
    if (todoRef.current) {
      const todoValue = todoRef.current.value
      addTodo({
        tasks: todoValue
      });
      todoRef.current.value = ''
    }
  }
  console.log(tasks)
  return (
    <Container>
      <AddTodo>
        <input type="text" placeholder="Tarefa..." ref={todoRef} />
        <button onClick={handleAddTodo}>
          <Plus size={26} />
        </button>
      </AddTodo>
      <Content>
        {tasks.map(task => {
          return (
            <Todo task={task} />
          )
        })}

      </Content>
    </Container>
  )
}