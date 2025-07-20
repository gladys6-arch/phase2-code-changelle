import { useState, useEffect } from "react";


function Deposits() {
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState("");
  const [depositAmount, setDepositedAmount] =useState("");

useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);


  function handleDeposit(e){
    e.preventDefault();

    const goalItem =goals.find((goal)=> goal.id === parseInt(selectedGoalId));
    if(!goalItem) return;
    
    const updatedGoal = {
      ...goalItem, savedAmount:parseFloat(goalItem.savedAmount) + parseFloat(depositAmount),

    };


    fetch(`http://localhost:5000/goals/${goalItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setGoals((prevGoals) =>
          prevGoals.map((g) => (g.id === updated.id ? updated : g))
        );
        setDepositedAmount("");
        alert("Deposit added successfully!");
      });

  }
  

  return (
    <div>
      <h2>Make a Deposit</h2>
      
      <form onSubmit={handleDeposit}>
        <label>
          Select Goal:

           <select
            value={selectedGoalId}
            onChange={(e) => setSelectedGoalId(e.target.value)}
            required
          >
            <option value="">-- Choose a goal --</option>
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
            value={depositAmount}
            onChange={(e) => setDepositedAmount(e.target.value)}
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
