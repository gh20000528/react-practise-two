import React , {useState} from 'react'

import Button from "../../UI/Button.js";
import './CoursInput.css'

const CoursInput = props => {

    const [todo , settodo] = useState('')

    const todoInputHandler = (e) =>{
        settodo(e.target.value)
    }

    const formSubmitHandler = (e) =>{
        e.preventDefault()
        props.onAddTodo(todo)
    }


    return (
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
