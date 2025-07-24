import { useState, useEffect } from "react";
import "./Deposits.css";


function Deposits() {
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState("");
  const [amount, setAmount] =useState("");

useEffect(() => {
    fetch("https://backend-api-zdjz.onrender.com")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);


  function handleSubmit(e){
    e.preventDefault();

    const selectedGoal =goals.find((goal)=> goal.id === parseInt(selectedGoalId));
    if(!selectedGoal || !amount) return;
    
    const updatedSavedAmount = selectedGoal.savedAmount + parseFloat(amount);
console.log({ selectedGoal, updatedSavedAmount });


    fetch(`https://backend-api-zdjz.onrender.com/${selectedGoal.id}`, {
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
 <div className="deposit-form">
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <button className="submit" type="submit">Submit Deposit</button>
      </form>
    </div>

  );
}

export default Deposits;
