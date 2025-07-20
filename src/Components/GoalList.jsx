import GoalItem from "./GoalItem";

function GoalList({goals}){

  return (
    <div>
      {goals.map((goal)=>(
        <GoalItem key={goal.id} goal={goal} />
      ))}

    </div>
  )

}

export default GoalList;