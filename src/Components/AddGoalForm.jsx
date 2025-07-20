import { useState } from "react";

function AddGoalForm({onAddGoal}){
  const [formData, setFormData] = useState({
    name:"",
    targetAmount:"",
    savedAmount:"",
    category:"",
    deadline:"",
    createdAt: new Date().toISOString().split("T")[0],

  });

  function handleChange(event){
    const {name, value} = event.target;
    setFormData ({...formData, [name]: value});

  }

  function handleSubmit(event){
    event.preventDefault();

    fetch("http://localhost:5000/goals",{
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(formData),
    
    })
    .then(res=>res.json())
    .then(newGoal => onAddGoal(newGoal));

    setFormData({
      name:"",
      targetAmount:"",
      savedAmount:"",
      category:"",
      deadline:"",
      createdAt: new Date().toISOString().split("T")[0],
    })
  }


  return (
    <div>

    </div>
  )
}


export default AddGoalForm;