import React, { useState } from 'react';
import './App.css';

import CoursInput from './components/CourseGoals/CoursInput/CoursInput'
import CoursGoalsList from './components/CourseGoals/CoursGoalsList/CoursGoalsList'


function App() {
  const [todoList , setTodoList] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]) 

  const addTodoHandler = enteredText =>{
    setTodoList( prevtodo => {
      const updatedTodo = [...prevtodo]
      updatedTodo.unshift({text: enteredText, id: Math.random().toString()})
      return updatedTodo
    })
  }

  const deleteItemHandler = todoID =>{
    setTodoList(prevtodo =>{
      const updatedTodo = prevtodo.filter(todo => todo.id !== todoID)
      return updatedTodo
    })
  }

  let content = (
    <p style={{ textAlign: 'center'}}> No todo found. Maybe add one? </p>
  )
  
  if (todoList.length > 0) {
    <CoursGoalsList items={todoList} onDeleteItem={deleteItemHandler}></CoursGoalsList>
  }

  return (
    <div className="App">
      <section id='goal-form'>
        <CoursInput onAddTodo={addTodoHandler}></CoursInput>
      </section>
      <section id='goals'>
        {content}
        {todoList.length > 0 && (
          <CoursGoalsList
            items={todoList}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        }
      </section>
    </div>
  );
}

export default App;
