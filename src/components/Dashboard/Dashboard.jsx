import React from "react";
import { connect } from 'react-redux';

import "./Dashboard.css";

const Dashboard = ({ tasks }) => {
  return (
    <div className="dashboard-container">
      <h3 className="dashboard-container__title">Dashboard</h3>
      <div className="table-container">
        <table className="table-container__table">
          <tbody>
            <tr>
              <td></td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      tasks: state.tasks.data
    };
  }

export default connect(mapStateToProps)(Dashboard);
