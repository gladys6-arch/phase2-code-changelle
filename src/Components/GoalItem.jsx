

function GoalItem({goal}){
  const { name, targetAmount, savedAmount, category, deadline } = goal;

  return (
    <li style={{border: "1px solid #ccc", padding: "10px"}}>
      <h3>{name}</h3>
      <p>Target Amount: ${targetAmount}</p>
      <p>Saved Amount: ${savedAmount}</p>
      <p>Category:{category}</p>
      <p>Deadline: {deadline}</p>
      <button onClick={()=> onDelete(id)}>Delete</button>
    </li>
  )
}

export default GoalItem; 