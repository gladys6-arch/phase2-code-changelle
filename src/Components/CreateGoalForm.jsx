import { useState } from "react";
import "./CreateGoalForm.css";

function CreateGoalForm({ onAddGoal }) {
  const [name, setName] =useState("");
  const [targetAmount, setTargetAmount] =useState("");
  const [category, setCategory] =useState("");
  const [deadline, setDeadline] = useState("");

console.log("CreateGoalForm is mounted");


  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted")
    const newGoal ={
    name,
    targetAmount: parseFloat(targetAmount),
    savedAmount: 0,
    category,
    deadline,
    };

    fetch("https://backend-api-zdjz.onrender.com", {
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

      console.log("Submit button clicked");

  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
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
      <button className="add-goal-btn" type="submit">Add Goal</button>

    </form>
  );
}

export default CreateGoalForm;
