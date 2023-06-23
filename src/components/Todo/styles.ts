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
  div{
    display: flex;
    gap: 0.5rem;
  }

`