import { useEffect, useState } from "react";
import GoalList from "../components/GoalList";

function Goals() {
  const [goals, setGoals] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then(res => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
      }, []);
         

  return (
    <div>
      <h2>Your Goals</h2>
      <GoalList goals={goals} />
    </div>
  );

}

export default Goals;



