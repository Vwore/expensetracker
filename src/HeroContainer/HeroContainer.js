import { Button, Grid2 } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./style.css";
import BalanceModal from "./BalanceModal/BalanceModal";
import ExpenseModal from "./ExpenseModal/ExpenseModal";

const catergory = ["food", "entertainment", "travel"];

function dataGenerator(expense) {
  const data = { food: 0, entertainment: 0, travel: 0 };

  expense.forEach((value) => {
    data[value.catergory] = data[value.catergory] + value.amount;
  });
  const ans = catergory.map((value) => ({ name: value, value: data[value] }));
  return ans;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function HeroContainer({ expense,setExpense }) {
  const [balance, setBalance] = useState(0);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  useEffect(() => {
    setBalance(Number(JSON.parse(localStorage.getItem("balance"))));
  }, []);
  const data = dataGenerator(expense);

  return (
    <Grid2 container className="container" spacing={5}>
      <Grid2 Item className="container-box" size={4} paddingY={5}>
        <h2>
          Wallet Balance: <span style={{ color: "#9DFF5B" }}>₹{balance}</span>
        </h2>
        <Button
          className="add-income"
          variant="contained"
          // startIcon={<AddIcon />}
          onClick={() => {
            setShowBalanceModal(true);
          }}
          type="button"
        >
          {'+ Add Income'}
        </Button>
      </Grid2>
      <Grid2 Item className="container-box" size={4} paddingY={5}>
        <h2>
          Expenses: <span style={{ color: "#F4BB4A" }}>₹500</span>
        </h2>
        <Button
          className="add-expense"
          variant="contained"
          // startIcon={<AddIcon />}
          onClick={()=>{setShowExpenseModal(true)}}
          type="button"
        >
          {'+ Add Expense'}
        </Button>
      </Grid2>
      <Grid2 Item className="container-chart" size={4}>
        <PieChart width={400} height={200}>
          <Pie
            data={data}
            cx={200}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </Grid2>
      <BalanceModal
        setShowBalanceModal={setShowBalanceModal}
        showBalanceModal={showBalanceModal}
        balance={balance}
        setBalance={setBalance}
      />
      <ExpenseModal
        showExpenseModal={showExpenseModal}
        setShowExpenseModal={setShowExpenseModal}
        balance={balance}
        setBalance={setBalance}
        expense={expense}
        setExpense={setExpense}
      />
    </Grid2>
  );
}

export default HeroContainer;
