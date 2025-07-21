import React from "react";
import GoalItem from "./GoalItem"
import './GoalList.css';


function GoalList({goals,onDeleteGoal}){
  if (!goals.length) return <p>No goals yet. Start by adding one!</p>

  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <li key={goal.id} className="goal-list-item">
          <span className="goal-name">{goal.name} </span>- <span className="goal-amount">{goal.savedAmount}/{goal.targetAmount}</span>
          <button className="delete-btn" onClick={() => onDeleteGoal(goal.id)}>Delete</button>
        </li>
      ))}

    </ul>
  )

}

export default GoalList;