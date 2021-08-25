import Modal from "react-modal";
import React, { useState } from "react";

const TransferFunds = ({ onTransfer }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const [accountName, setAccountName] = useState("");
  const [newBalance, setNewBalance] = useState("");
  const [accountNameTo, setAccountNameTo] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (newBalance < 1) {
      alert("Please provide an amount higher than P1.00");
      return false;
    } else {
      onTransfer(accountName, accountNameTo, newBalance);

      setAccountName("");
      setAccountNameTo("");
      setNewBalance("");
    }
  };

  return (
    <div className="transferFundsModal">
      <button className="transferBtn" onClick={() => setmodalIsOpen(true)}>
        Transfer
      </button>

      <Modal isOpen={modalIsOpen}>
        <section>
          <h2 className="font-semibold text-center text-2xl pt-3">
            Transfer Form
          </h2>
          <form className="border-2 border-indigo-600 w-6/12 ml-80 mt-11 p-10">
            <div className="flex justify-end">
              <button
                onClick={() => setmodalIsOpen(false)}
                className="font-semibold text-lg"
              >
                X
              </button>
            </div>

            <div className="flex flex-col items-center ">
              <label className="font-semibold text-xl ">Transfer from:</label>
              <input
                name="account_name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                required
                type="text"
                className="border-2 border-indigo-800 mt-2 mb-8 p-1 w-6/12"
              ></input>

              <label className="font-semibold text-xl ">Transfer to:</label>
              <input
                name="account_name_to"
                value={accountNameTo}
                onChange={(e) => setAccountNameTo(e.target.value)}
                required
                type="text"
                className="border-2 border-indigo-800 mt-2 mb-8 p-1 w-6/12"
              ></input>

              <label className="font-semibold text-xl ">
                Amount to transfer:
              </label>
              <br></br>

              <input
                name=""
                value={newBalance}
                onChange={(e) => setNewBalance(e.target.value)}
                type="number"
                className="border-2 border-indigo-800  mb-1 p-1 w-6/12"
              ></input>

              <div className="text-center py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 w-24 mt-8">
                <button onClick={onHandleSubmit}>Submit</button>
              </div>
            </div>
          </form>
        </section>
      </Modal>
    </div>
  );
};

export default TransferFunds;
