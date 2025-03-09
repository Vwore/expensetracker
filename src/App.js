import "./App.css";
import { Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import HeroContainer from "./HeroContainer/HeroContainer";
import RecentTransaction from "./RecentTransaction/RecentTransaction";
const catergory = ["food", "entertainment", "travel"];

const Expense = [
  { catergory: "food", date: new Date(), amount: 150, title: "Samosa" },
  { catergory: "travel", date: new Date(), amount: 400, title: "Taxi" },
  {
    catergory: "travel",
    date: new Date(),
    amount: 1000,
    title: "trip to guwahati",
  },
  {
    catergory: "entertainment",
    date: new Date(),
    amount: 200,
    title: "Chavva",
  },
];

function App() {
  const [expense, setExpense] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("balance") == null) {
      localStorage.setItem("balance", 5000);
      localStorage.setItem("expense", JSON.stringify(Expense));
    }
  }, []);

  useEffect(() => {
    setExpense(JSON.parse(localStorage.getItem("expense")));
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Expense Tracker</h1>
      <HeroContainer expense={expense} setExpense={setExpense} />
      <Grid2 container>
        <Grid2 Item size={7}>
          <RecentTransaction expense={expense} />
        </Grid2>
        <Grid2 Item size={5}></Grid2>
      </Grid2>
    </div>
  );
}

export default App;
