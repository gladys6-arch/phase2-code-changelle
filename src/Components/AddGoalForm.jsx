import { useState } from "react";

function AddGoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: "",
    category: "",
    deadline: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newGoal) => onAddGoal(newGoal));

    setFormData({
      name: "",
      targetAmount: "",
      savedAmount: "",
      category: "",
      deadline: "",
      createdAt: new Date().toISOString().split("T")[0],
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" value={formData.name} onChange={handleChange} />
      <input name="targetAmount" type="number" placeholder="Target" value={formData.targetAmount} onChange={handleChange} />
      <input name="savedAmount" type="number" placeholder="Saved" value={formData.savedAmount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
