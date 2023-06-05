import React , {useState} from 'react'

import Button from "../../UI/Button.js";
import './CoursInput.css'
import styled from 'styled-components'


const FormControl = styled.div`
    margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }  
    &.invalid input{
    border-color: red;
    background: #ffd7d7;
    } 
    &.invalid label{
    color: red;
    }
}

`


const CoursInput = props => {
    const [todo , settodo] = useState('')
    const [isValid , setIsValid] = useState(true)
    
    // 取input資料
    const todoInputHandler = (e) =>{
        if ( todo.trim().length === 0 ) {
            setIsValid(true)
        }
        settodo(e.target.value)
    }
    
    // 利用父層給的方法(props.onAddTodo)將資料往上傳
    const formSubmitHandler = (e) =>{
        e.preventDefault()
        if ( todo.trim().length === 0 ){
            setIsValid(false)
            return
        }
        props.onAddTodo(todo)
    }

    return (
        // submit事件
        <form onSubmit={formSubmitHandler}>
            <FormControl isValid={ !isValid }>
                <label style={{ color: !isValid  ? 'red' : 'black' }}>TODO LIST</label>
                <input style={{ borderColor: !isValid  ? 'red' : 'black' }} type="text" onChange={todoInputHandler}/>
            </FormControl>
            <Button type='submit'> new todo </Button>
        </form>
    )
}

export default CoursInput
