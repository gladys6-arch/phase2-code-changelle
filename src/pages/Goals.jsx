import { useEffect, useState } from "react";
import GoalList from "../components/GoalList";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch goals");
        }
        return response.json();
      })
      .then((data) => {
        setGoals(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading goals...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Your Goals</h2>
      <GoalList goals={goals} />
    </div>
  );
}

export default Goals;

