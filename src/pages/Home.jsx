 import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Welcome to Smart Goal Planner</h1>
      <p>Start creating goals to track your financial journey.</p>
      <div style={{marginTop: "2rem"}}>
        <h2>Quick Actions</h2>
        <ul>
          <li><Link to="/goals">View All Goals</Link></li>
          <li><Link to="/deposits">Make a Deposit</Link></li>
          <li><Link to="/progress">Check Progress</Link></li>
        </ul>

      </div>
    </div>
  );
}
