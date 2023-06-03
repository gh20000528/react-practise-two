import React from 'react'

import './CoursGoalsList.css'
import CourseGoalsItem from '../CourseGoalsItem/CourseGoalsItem'

const CoursGoalsList = props => {
  return (
    <ul className='goal-list'>
      { props.items.map( todo => (
        <CourseGoalsItem
          key={ todo.id }
          id={ todo.id }
          onDelete={ props.onDeleteItem }
        >
          {todo.text}
        </CourseGoalsItem>
      )) }
    </ul>
  )
}

export default CoursGoalsList
