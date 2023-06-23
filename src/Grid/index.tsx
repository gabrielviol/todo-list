import { v4 as uuidv4 } from 'uuid';
import { Plus } from "@phosphor-icons/react";
import { AddTodo, Container, Content, Total } from "./style";
import { useContext, useRef } from "react";
import { ListTodo } from "../components/ListTodo";
import { ListTodoContext } from "../hooks/ListTodoProvider";


export function Grid() {
  const todoRef = useRef<HTMLInputElement | null>(null)
  const { addItem, todosCompleted, todosPending } = useContext(ListTodoContext)

  function handleAddTodo() {
    if (todoRef.current) {
      const todoValue = todoRef.current.value
      addItem({ id: uuidv4(), task: todoValue, completed: false })
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
      <Total>
        {todosCompleted.length > 0 ? (<span>Completos {todosCompleted.length}</span>) : <>-</>}
        {todosPending.length > 0 ? (<span>Pendentes {todosPending.length > 0 ? todosPending.length : <>-</>}</span>) : null}</Total>
      <Content>
        <ListTodo />
      </Content>
    </Container>
  )
}