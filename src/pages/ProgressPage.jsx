import React, { useEffect, useState } from "react";


function ProgressPage(){

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((r) => r.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  return (
    <div>
      <h2>Goal Progress</h2>
      {goals.length === 0 ? (
        <p>No goals found.</p>
      ) : (
        <ul>
          {goals.map((goal) => {
            const progress = (goal.savedAmount / goal.targetAmount) * 100;

            return (
              <li key={goal.id} style={{ marginBottom: "1rem" }}>
                <h4>{goal.name}</h4>
                <div style={{ background: "#eee", borderRadius: "5px", height: "20px", width: "100%" }}>
                  <div
                    style={{
                      width: `${progress}%`,
                      background: progress >= 100 ? "green" : "blue",
                      height: "100%",
                      borderRadius: "5px",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </div>
                <p>{`Saved: $${goal.savedAmount} / $${goal.targetAmount}`}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>

    
  )

}


export default ProgressPage;