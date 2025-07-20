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
        setGoals([...goals, newGoal])

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



