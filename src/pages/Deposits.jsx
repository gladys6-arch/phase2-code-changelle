import { useState, useEffect } from "react";


function Deposits() {
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState("");
  const [Amount, setAmount] =useState("");

useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);


  function handleSubmit(e){
    e.preventDefault();

    const deposit =goals.find((goal)=> goal.id === parseInt(selectedGoalId));
    if(!deposit || !selectedGoalId) return;
    
    const updatedSavedAmount = goal.savedAmount + deposit;


    fetch(`http://localhost:5000/goals/${goalItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ savedAmount: updatedSavedAmount}),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g))
        );
        setAmount("");
        setSelectedGoalId("");
      })
      .catch((err) => console.error("Error fetching goals:", err));


  }
  

  return (
 <div>
      <h2>Make a Deposit</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Goal:
          <select
            value={selectedGoalId}
            onChange={(e) => setSelectedGoalId(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            {goals.map((goal) => (
              <option key={goal.id} value={goal.id}>
                {goal.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Deposit Amount:
          <input
            type="number"
            min="1"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Deposit</button>
      </form>
    </div>

  );
}

export default Deposits;
