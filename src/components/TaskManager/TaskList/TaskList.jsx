import React from 'react'

const TaskList = ({tasks}) => {
  console.log(tasks);
  return (
<ul>
  {tasks.map((task, index) => { return <li>{task}</li>})}
</ul>
  )
}

export default TaskList
