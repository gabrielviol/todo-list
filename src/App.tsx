import { Grid } from "./Grid/index.tsx";
import { TodoContextProvider } from "./hooks/useTodo.tsx";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <TodoContextProvider>
      <GlobalStyle />
      <Grid />
    </TodoContextProvider>
  )
}
