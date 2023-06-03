import React, { useState } from 'react';
import './App.css';

import CoursInput from './components/CourseGoals/CoursInput/CoursInput'


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
  return (
    <div className="App">
      <section id='goal-form'>
        <CoursInput onAddTodo={addTodoHandler}></CoursInput>
      </section>
    </div>
  );
}

export default App;
