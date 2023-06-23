import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem auto;
  width: 50rem;
  min-height: 40rem;
`
export const AddTodo = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  input{
    width: 25rem;
    height: 2rem;
    padding: 1rem;
    color: white;
    font-size: large;
    border: none;
    border-bottom: 2px solid #969696;
    background: none;
    border-radius: 2px;
  }
  input::placeholder{
    color: white;
    font-size: large;
  }
  input:focus{
    outline: none;
  }
  button{
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

`
export const Content = styled.div`
  display: flex;
  border: 1px solid #969696;
  border-radius: 5px;
  padding: 2rem 6rem;
`
export const Total = styled.div`
  display: flex;
  padding: 0 8rem;
  justify-content: space-between;
  span{
    color: white;
    font-size: medium;
    font-weight: bold;
  }
`