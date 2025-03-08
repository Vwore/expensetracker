import { Box } from "@mui/material";
import "./style.css";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

function TransactionCard({value}) {
  return (
    <Box className="card">
      <Box className="card-sub">
        <LocalPizzaIcon style={{color:'grey'}} fontSize="large"/>
        <div>
          <div>{value.title}</div>
          <div style={{color:'grey',fontSize:'15px'}}>{value.date}</div>
        </div>
      </Box>
      <Box className="card-sub">
        <div>₹{value.amount}</div> <CancelIcon style={{color:'red'}} fontSize="large"/>
        <EditIcon fontSize="large" style={{color:'yellow'}} />
      </Box>
      {/* <div style={{height:'2px',width: '100%'}}></div> */}
    </Box>
  );
}

export default TransactionCard;
