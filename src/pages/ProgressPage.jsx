import React, { useEffect, useState } from "react";


function ProgressPage(){

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((r) => r.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

}


export default ProgressPage;