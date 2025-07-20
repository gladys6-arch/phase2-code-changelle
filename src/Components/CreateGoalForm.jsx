import { useState } from "react";

function CreateGoalForm({ onAddGoal }) {
  const [name, setName] =useState("");
  const [targetAmount, setTargetAmount] =useState("");
  const [category, setCategory] =useState("");
  const [deadline, setDeadline] = useState("");



  function handleSubmit(e) {
    e.preventDefault();
    const newGoal ={
    name,
    targetAmount: parseFloat(targetAmount),
    savedAmount: 0,
    category,
    deadline,
    };

    fetch("http://localhost:5000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddGoal(data);
      
        setName("");
        setTargetAmount("");
        setCategory("");
        setDeadline("");
        
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Goal</h3>
      <label>
        Name: <input value={name} onChange={(e) => setName(e.target.value)} required />

      </label>
      <br/>
      <label>
        Target Amount: <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required />
      </label>
      <br/>
      <label>
        Category: <input value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <br />
      <label>
        Deadline: <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Goal</button>

    </form>
  );
}

export default CreateGoalForm;
