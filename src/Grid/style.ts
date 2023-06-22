import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem auto;
  width: 50rem;
  height: 40rem;
  border: 1px solid red;
  border-radius: 10px;
`
export const AddTodo = styled.div`
  display: flex;
  gap: 1rem;
  border: 1px solid red;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  input{
    width: 25rem;
    height: 2rem;
    padding: 1rem;
    border: none;
    border-radius: 2px;
  }
  button{
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

`

export const Content = styled.div`
  display: flex;
  border: 1px solid red;
  padding: 2rem 6rem;
`