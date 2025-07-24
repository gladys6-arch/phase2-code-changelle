import { useEffect, useState } from "react";
import GoalList from "../Components/GoalList";
import CreateGoalForm from "../Components/CreateGoalForm";
import './Goals.css';



function Goals() {
  const [goals, setGoals] = useState([]);
  console.log("Goals component mounted");

  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then(res => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
      }, []);

      function handleAddGoal(newGoal){
        fetch("https://backend-api-zdjz.onrender.com/goals", {
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
    fetch(`https://backend-api-zdjz.onrender.com/goals/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
      })
      .catch((err) => console.error("Error deleting goal:", err));
         
    }
  return (
    <div className="goals-container">
      <h2 className="goal-title">Your Goals</h2>
      <div className="goals-content">
       <CreateGoalForm onAddGoal={handleAddGoal}/>
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </div>
    </div>
  );

}

export default Goals;



