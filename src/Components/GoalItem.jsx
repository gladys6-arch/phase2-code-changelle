import React from "react";
import "./GoalItem.css"


function GoalItem({goal, onDeleteGoal}){
  const { id, name, targetAmount, savedAmount, category, deadline } = goal;
  const isCompleted = savedAmount >= targetAmount;
  const progressPercent = Math.min((savedAmount / targetAmount) * 100, 100);

  
  const formattedDeadline = new Date(deadline).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="goal-card">
      <h3 className="goal-name">{name}</h3>
      <p className="goal-category"><strong>Category:</strong> {category}</p>
      <p><strong>Target:</strong> KES {targetAmount}</p>
      <p><strong>Saved:</strong> KES {savedAmount}</p>
      <p><strong>Deadline:</strong> {formattedDeadline}</p>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercent}%` }}>
          {Math.floor(progressPercent)}%
        </div>
      </div>

      {isCompleted && (
        <p className="success">🎉 Goal completed!</p>
      )}

      <button className="delete-btn" onClick={() => onDeleteGoal(id)}>Delete</button>
    </div>
  );
}

export default GoalItem; 