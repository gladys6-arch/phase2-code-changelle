import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddGoal() {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: "",
    category: "",
    deadline: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  const navigate = useNavigate();

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
      .then((r) => r.json())
      .then(() => navigate("/goals")); // redirect to goals page
  }

  return (
    <div>
      <h2>Add a New Goal</h2>
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

export default AddGoal;
