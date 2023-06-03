import React , {useState} from 'react'

import Button from "../../UI/Button.js";
import './CoursInput.css'

const CoursInput = props => {
    const [todo , settodo] = useState('')

    // 取input資料
    const todoInputHandler = (e) =>{
        settodo(e.target.value)
    }

    // 利用父層給的方法(props.onAddTodo)將資料往上傳
    const formSubmitHandler = (e) =>{
        e.preventDefault()
        props.onAddTodo(todo)
    }


    return (
        // submit事件
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>TODO LIST</label>
                <input type="text" onChange={todoInputHandler}/>
            </div>
            <Button type='submit'> new todo </Button>
        </form>
    )
}

export default CoursInput
