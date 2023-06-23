import styled from "styled-components";

export const Item = styled.li`
  list-style: none;
  border: 2px solid #969696;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  border-radius: 5px;
  label{
    display: flex;
    gap: 0.5rem;
    color: white;
    font-size: large;
  }  
  .completed-task{
    text-decoration: line-through;
    opacity: 0.5;
  }
  div{
    display: flex;
    gap: 0.5rem;
  }
  input{
    padding: 0.5rem;
    color: white;
    font-size: medium;
    border: none;
    border-bottom: 2px solid #969696;
    background: none;
    border-radius: 2px;
  }
  input::placeholder{
    color: white;
    font-size: medium;
  }
  input:focus{
    outline: none;
  }
  div{
    display: flex;
    gap: 0.5rem;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 5px;
    border: none;
    background-color: #969696;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  button:disabled{
    opacity: 0.5;
    cursor: default;
  }
`