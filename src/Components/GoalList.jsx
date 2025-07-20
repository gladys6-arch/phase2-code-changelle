import React from "react";
import GoalItem from "./GoalItem"

function GoalList({goals}){
  if (!goals.length) return <p>No goals yet. Start by adding one!</p>

  return (
    <ul>
      {goals.map((goal)=>(
        <GoalItem key={goal.id} goal={goal} onDelete={onDeleteGoal} />
      ))}

    </ul>
  )

}

export default GoalList;