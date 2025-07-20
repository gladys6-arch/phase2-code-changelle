import { useEffect, useState } from "react";
import GoalList from "../components/GoalList";

function Goals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((r) => r.json())
      .then(setGoals);
  }, []);

  return (
    <div>
      <h2>Your Goals</h2>
      <GoalList goals={goals} />
    </div>
  );
}

export default Goals;
