import { useEffect, useState } from "react";
import GoalList from "../Components/GoalList";
import CreateGoalForm from "../Components/CreateGoalForm";


function Goals() {
  const [goals, setGoals] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then(res => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
      }, []);

      function handleAddGoal(newGoal){
        fetch("http://localhost:5000/goals", {
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify(newGoal)
        })
        .then(res => res.json())
        .then((createdGoal) =>{
          setGoals((prevGoals) => [...prevGoals, createdGoal])
        })

      }

    function handleDeleteGoal(id) {
    fetch(`http://localhost:5000/goals/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
      })
      .catch((err) => console.error("Error deleting goal:", err));
         
    }
  return (
    <div>
      <h2>Your Goals</h2>
      <CreateGoalForm onAddGoal={handleAddGoal}/>
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </div>
  );

}

export default Goals;



