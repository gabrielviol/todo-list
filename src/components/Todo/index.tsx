import { useState } from "react";
import { Content } from "./style";

export function Todo(task: any) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Content>
      <input type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
      <span>{task}</span>
    </Content>
  )
}