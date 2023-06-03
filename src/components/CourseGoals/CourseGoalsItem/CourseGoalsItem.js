import React from 'react'

import './CourseGoalsItem.css'

const CourseGoalsItem = props => {
  
  const deleteHandler= () =>{
    props.onDelete(props.id)
  }

  return (
    <li className='goal-item' onClick={deleteHandler}>
      {props.children}
    </li>
  )
}

export default CourseGoalsItem
