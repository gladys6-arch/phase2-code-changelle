# Phase2 Code Changelle

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

## 🚀 Getting Started

1. **Clone the repository**

```
git clone https://github.com/your-username/phase2-code-challenge.git

cd phase2-code-changelle

```

2. **Install dependencies**

```
npm install

```

3.  **Start the JSON server (for mock API)**

Make sure you have json-server installed globally:


```
npm install -g json-server

```
Start the mock API Server

```
json-server --watch db.json --port 5000

```

4. **Start the React development server**

use node version 18 and above

if you have it installed not use as default

```
nvm use 22.17.1

```


In a separate terminal tab/window:

```
npm run dev

```

## 🌐 Live Demo

- **Frontend:** [https://your-frontend-url.onrender.com](https://your-frontend-url.onrender.com)
- **Backend API:** [https://backend-api-zdjz.onrender.com](https://backend-api-zdjz.onrender.com)



## 🛠 Technologies Used

- React (with Vite)

- React Router DOM for page navigation

- json-server to simulate a RESTful backend

- CSS for styling (or Tailwind/custom)

##  🧑‍💻 Author

Built by **Gladys Achando** ✨

Reach out for feedback, questions, or ideas!



## 📄 License

MIT License

Copyright (c) 2025 [Gladys Achando]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.
