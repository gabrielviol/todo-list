import React, { useState, createContext, ReactNode } from 'react'

interface ListTodoProviderProps {
  children: ReactNode;
}

export interface ListTodoProps {
  task: string
  completed: boolean
}

export interface Todo {
  todos: ListTodoProps[],
  addItem: (items: ListTodoProps) => void,
  removeItem: (items: ListTodoProps) => void,
  //updatedAmount: ({ id, amount }: UpdateCartItem) => void
}


export const ListTodoContext = createContext<Todo>({} as Todo)

export const ListTodoProvider = ({ children }: ListTodoProviderProps) => {
  const [todos, setTodos] = useState<ListTodoProps[]>([
    { task: 'Trabalhar', completed: false },
    { task: 'comer', completed: false },
  ])

  function addItem(todo: ListTodoProps) {
    const updatedList = [...todos];
    const todoExists = updatedList.find(todos => todos.task === todo.task)
    if (todoExists || todo.task == '') {
      return updatedList
    } else {
      setTodos([...todos, { task: todo.task, completed: false }])
    }
  }

  function removeItem({ task }: ListTodoProps) {
    const updatedList = [...todos];
    const todoExists = updatedList.find(todos => todos.task === task)

    if (todoExists) {
      const removeTodo = updatedList.filter(todos => todos.task !== task)
      setTodos(removeTodo)
    } else {
      console.log('deu erro')
    }

  }

  return (
    <ListTodoContext.Provider value={{ todos, addItem, removeItem }}>
      {children}
    </ListTodoContext.Provider>
  )
}