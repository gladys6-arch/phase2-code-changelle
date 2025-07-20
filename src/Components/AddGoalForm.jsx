import { useState } from "react";

function AddGoalForm({onAddGoal}){
  const [formData, setFormData] = useState({
    name:"",
    targetAmount:"",
    savedAmount:"",
    category:"",
    deadline:"",
    createdAt: new Date().toISOString().split("T")[0],

  })


  return (
    <div>

    </div>
  )
}


export default AddGoalForm;