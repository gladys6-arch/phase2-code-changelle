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
        

        

      }
         

  return (
    <div>
      <h2>Your Goals</h2>
      <CreateGoalForm onAddGoal={handleAddGoal}/>
      <GoalList goals={goals} />
    </div>
  );

}

export default Goals;



