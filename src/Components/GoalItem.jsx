function GoalItem({goal}){
  const {name, targetAmount, savedAmount, deadline} = goal;
  const percentage = Math.round((savedAmount / targetAmount) * 100);

  return (
    <div style={{border: "1px solid #ccc", padding: "10px"}}>
      <h3>{name}</h3>
      <p>Target: ${targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <p>Deadline: {deadline}</p>
      <p>Progress: {percentage} </p>

    </div>
  )
}

export default GoalItem; 