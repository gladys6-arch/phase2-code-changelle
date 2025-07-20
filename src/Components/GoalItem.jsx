

function GoalItem({goal}){
  const { name, targetAmount, savedAmount, deadline } = goal;

  return (
    <li style={{border: "1px solid #ccc", padding: "10px"}}>
      <h3>{name}</h3>
      <p>Target Amount: ${targetAmount}</p>
      <p>Saved Amount: ${savedAmount}</p>
      <p>Deadline: {deadline}</p>
    </li>
  )
}

export default GoalItem; 