import GoalItem from "./GoalItem";

function GoalItem({}){

  return (
    <div>
      {Goals.map((goal)=>(
        <GoalItem key={goal.id} goal={goal} />
      ))}

    </div>
  )

}

export default GoalItem;