import ReactModal from "react-modal";
import {  Button,  TextField } from "@mui/material";
import { useState } from "react";



function BalanceModal({
  setShowBalanceModal,
  showBalanceModal,
  balance,
  setBalance,
}) {
      const [modalIncome, setModalIncome] = useState("");
    
  return (
    <ReactModal
      onRequestClose={() => {
        setShowBalanceModal(false);
      }}
      isOpen={showBalanceModal}
      className="Modal"
    >
      <h1 style={{ fontWeight: "900" }}>Add Balance</h1>
      <div className="modal-container">
        <TextField
          label="Income Amount"
          style={{ borderRadius: "20px" }}
          value={modalIncome}
          onChange={(e) => {
            setModalIncome(e.target.value);
          }}
          type="number"
          placeholder="Income Amount"
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#F4BB4A", borderRadius: "20px" }}
          onClick={() => {
            const newBalance = balance + Number(modalIncome);
            localStorage.setItem("balance", newBalance);
            setBalance(newBalance);
            setShowBalanceModal(false);
          }}
          type="submit"
          label='Add Balance'
        >
          Add Balance
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#D9D9D9", borderRadius: "20px" }}
          onClick={() => {
            setShowBalanceModal(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </ReactModal>
  );
}

export default BalanceModal;
