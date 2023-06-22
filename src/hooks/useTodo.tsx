import { ReactNode, createContext, useState } from 'react';

interface TodoContextProviderProps {
  children: ReactNode;
}

interface ListTodoProps {
  tasks: string
}

export interface Todo {
  tasks: ListTodoProps[],
  addTodo: (task: ListTodoProps) => void
}

export const useTodo = createContext<Todo>({} as Todo);

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [tasks, setTasks] = useState<ListTodoProps[]>([]);

  function addTodo(task: ListTodoProps) {
    const updatedList = [...tasks]
    const todoExist = updatedList.find(tasks => tasks === task)

    if (todoExist) {
      return updatedList
    } else {
      updatedList.push(task)
    }
    setTasks(updatedList)
  }
  return (
    <useTodo.Provider
      value={{
        addTodo,
        tasks
      }}
    >
      {children}
    </useTodo.Provider>
  )
}