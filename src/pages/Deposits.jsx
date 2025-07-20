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
  



  return (
    <div>
      <h2>Add a New Goal</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="targetAmount" type="number" placeholder="Target" value={formData.targetAmount} onChange={handleChange} />
        <input name="savedAmount" type="number" placeholder="Saved" value={formData.savedAmount} onChange={handleChange} />
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}

export default Deposits;
