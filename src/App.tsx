import { Grid } from "./Grid/index.tsx";
import { ListTodoProvider } from "./hooks/ListTodoProvider.tsx";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ListTodoProvider >
      <GlobalStyle />
      <Grid />
    </ListTodoProvider>
  )
}
