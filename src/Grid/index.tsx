import { Plus } from "@phosphor-icons/react";
import { AddTodo, Container, Content } from "./style";
import { useContext, useRef } from "react";
import { ListTodo } from "../components/ListTodo";
import { ListTodoContext } from "../hooks/ListTodoProvider";

export function Grid() {
  const todoRef = useRef<HTMLInputElement | null>(null)
  const { addItem } = useContext(ListTodoContext)

  function handleAddTodo() {
    if (todoRef.current) {
      const todoValue = todoRef.current.value
      addItem({ task: todoValue, completed: false })
      todoRef.current.value = ''
    }
  }
  return (
    <Container>
      <AddTodo>
        <input type="text" placeholder="Tarefa..." ref={todoRef} />
        <button onClick={handleAddTodo}>
          <Plus size={26} />
        </button>
      </AddTodo>
      <Content>
        <ListTodo />
      </Content>
    </Container>
  )
}