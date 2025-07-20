import React from "react";
import GoalItem from "./GoalItem"

function GoalList({goals,onDeleteGoal}){
  if (!goals.length) return <p>No goals yet. Start by adding one!</p>

  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          {goal.name} - {goal.savedAmount}/{goal.targetAmount}
          <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
        </li>
      ))}

    </ul>
  )

}

export default GoalList;