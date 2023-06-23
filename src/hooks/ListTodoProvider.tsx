import { useState, createContext, ReactNode } from 'react'

interface ListTodoProviderProps {
  children: ReactNode;
}

export interface ListTodoProps {
  id: string
  task: string
  completed: boolean
}

export interface Todo {
  todos: ListTodoProps[],
  todosPending: ListTodoProps[],
  todosCompleted: ListTodoProps[],
  addItem: (items: ListTodoProps) => void,
  removeItem: (id: string) => void,
  editItem: (item: ListTodoProps) => void,
  checkedItem: (item: ListTodoProps) => void
}


export const ListTodoContext = createContext<Todo>({} as Todo)

export const ListTodoProvider = ({ children }: ListTodoProviderProps) => {
  const [todos, setTodos] = useState<ListTodoProps[]>([
  ])
  const todosPending = todos.filter(item => item.completed === false)
  const todosCompleted = todos.filter(item => item.completed === true)

  function addItem(todo: ListTodoProps) {
    const updatedList = [...todos];
    const todoExists = updatedList.find(todos => todos.task === todo.task)
    if (todoExists || todo.task == '') {
      return updatedList
    } else {
      setTodos([...todos, { id: todo.id, task: todo.task, completed: false }])
    }
  }

  function removeItem(task: string) {
    const updatedList = [...todos];
    const removeTodo = updatedList.filter(todos => todos.task !== task)
    setTodos(removeTodo)
    console.log(task)
  }

  function editItem(todo: ListTodoProps) {
    const findTodo = [...todos]
    if (findTodo) {
      findTodo.find(item => {
        if (item.id === todo.id) {
          item.task = todo.task
        }
      })
      setTodos(findTodo)
    } else {
      return [...todos]
    }
  }

  function checkedItem(todo: ListTodoProps) {
    const findTodo = [...todos]
    if (findTodo) {
      findTodo.find(item => {
        if (item.id === todo.id) {
          item.completed = !todo.completed
        }
      })
      setTodos(findTodo)
    }
    console.log(todos)
  }

  return (
    <ListTodoContext.Provider value={{ todos, addItem, removeItem, editItem, checkedItem, todosPending, todosCompleted }}>
      {children}
    </ListTodoContext.Provider>
  )
}