import GoalItem from "./GoalItem";

function GoalList({goals}){
  console.log("Rendering GoalList with goals:", goals);

  return (
    <div>
      {goals.map((goal)=>(
        <GoalItem key={goal.id} goal={goal} />
      ))}

    </div>
  )

}

export default GoalList;