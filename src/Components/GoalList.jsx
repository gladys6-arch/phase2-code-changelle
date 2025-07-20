import React from "react";
import GoalItem from "./GoalItem"

function GoalList({goals, onUpdateGoal, onDeleteGoal}){
  console.log("Rendering GoalList with goals:", goals);

  return (
    <div>
      {goals.map((goal)=>(
        <GoalItem key={goal.id} goal={goal} onUpdateGoal={onUpdateGoal} onDeleteGoal={onDeleteGoal} />
      ))}

    </div>
  )

}

export default GoalList;