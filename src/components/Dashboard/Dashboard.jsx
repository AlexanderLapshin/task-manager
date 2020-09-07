import React from 'react'

const Dashboard = ({tasks}) => {
  return (
    <div>
      <h3>Dashboard</h3>
      <table>
        <tr>
          <td>
          </td>
          <td>All</td>
          <td>Completed</td>
          <td>In progress</td>
        </tr>
        <tr>
          <td>Tasks</td>
          <td>{tasks.length}</td>
          <td>0</td>
          <td>{tasks.length}</td>
        </tr>
      </table>
    </div>
  )
}

export default Dashboard
