import { Box } from "@mui/material";
import "./style.css";
import TransactionCard from "./transactionCard/TransactionCard";

function RecentTransaction({expense}) {
  return (
    <Box>
      <h2>Recent Transactions</h2>
      <Box className="card-container">
        {expense.map((value,index)=>(<TransactionCard  value={value} />))}
      </Box>
    </Box>
  );
}

export default RecentTransaction;
