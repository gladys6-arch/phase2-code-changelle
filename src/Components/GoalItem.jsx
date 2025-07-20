

function GoalItem({goal}){

  return (
    <li style={{border: "1px solid #ccc", padding: "10px"}}>
      <h4>{goal.name}</h4>
      <p>Target: ${targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <p>Deadline: {deadline}</p>
      <p>Progress: {percentage} </p>

    </li>
  )
}

export default GoalItem; 