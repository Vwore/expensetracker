import ReactModal from "react-modal";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";

function ExpenseModal({
  setShowExpenseModal,
  showExpenseModal,
  balance,
  setBalance,
  expense,
  setExpense,
}) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [catergory, setCatergory] = useState("");
  const [date, setDate] = useState(dayjs("2022-04-17"));
function closing(){
  setTitle('');
  setPrice('');
  setCatergory('');
  setDate(dayjs("2022-04-17"));
}

  return (
    <ReactModal
      isOpen={showExpenseModal}
      onRequestClose={() => {
        closing();
        setShowExpenseModal(false);
      }}
      className="Modal"
    >
      <h1 style={{ fontWeight: "900" }}>Add Expense</h1>
      <div className="modal-form">
        <TextField
          variant="outlined"
          label="Title"
          name="title"
          style={{ borderRadius: "20px" }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          label="Price"
          style={{ borderRadius: "20px" }}
          name="price"
          variant="standard"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="modal-form">
        <FormControl style={{ width: "40%" }}>

          <select
            labelId="select-label"
            value={catergory}
            label="Catergory"
            className="modal-input"
            onChange={(e) => {
              setCatergory(e.target.value);
            }}
            name="category"
          >
            <option value="" disabled>
              Catergory
            </option>
            <option value={"food"}>Food</option>
            <option value={"entertainment"}>Entertainment</option>
            <option value={"travel"}>Travel</option>
          </select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateField"]}>
            <DateField
              label="Date"
              className="modal-input"
              format="DD-MM-YYYY"
              value={date}
              onChange={(value) => {
                // console.log(value.$d);
                setDate(value);
              }}
              name="date"
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#F4BB4A", borderRadius: "20px" }}
        onClick={() => {
          const newExpense = [...expense];
          newExpense.push({
            catergory: catergory,
            date: JSON.stringify(date.$d),
            amount: Number(price),
            title: title,
          });
          console.log(newExpense);

          setBalance(balance - Number(price));
          setExpense(newExpense);

          localStorage.setItem("expenses", JSON.stringify(newExpense));
          localStorage.setItem("balance", balance - Number(price));
          closing();
          setShowExpenseModal(false);

        }}
        type="submit"
        label='Add Balance'
      >
        Add Expense
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: "#D9D9D9", borderRadius: "20px" }}
        onClick={() => {
          setShowExpenseModal(false);
          closing();
        }}
      >
        Cancel
      </Button>
    </ReactModal>
  );
}

export default ExpenseModal;
