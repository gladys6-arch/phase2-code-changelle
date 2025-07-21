# Smart Goal Planner

A React-based financial planner that helps users set, track, and manage savings goals. Users can add goals, make deposits, and view progress — all backed by a local json-server API.

## Features
- ✅ Add financial goals with name, target amount, category, and deadline

- 💰 Make deposits toward each goal

- 📊 Visualize progress with dynamic updates

- 🗃️ Data persistence using json-server

- 🧭 Navigation between pages using React Router

## Ptoject Structure

```
src/
│
├── components/
│   └── common/
│       └── NavBar.jsx           # Navigation bar used across all pages
│   ├── GoalList.jsx             # Renders the list of all goals
│   ├── GoalItem.jsx             # Represents a single goal card/item
│   └── CreateGoalForm.jsx       # Form for adding a new goal
│
├── pages/
│   ├── Dashboard.jsx            # Main overview/landing page
│   ├── Goals.jsx                # Page to manage goals (view/add/delete)
│   ├── Deposits.jsx             # Page to make deposits to goals
│   └── ProgressPage.jsx         # Page to visualize goal progress
│
├── App.jsx                      # App layout and route definitions
└── main.jsx                     # Entry point rendering the App
```
