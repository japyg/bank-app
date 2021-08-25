import Modal from "react-modal";
import React, { useState } from "react";
// import NumberFormat from "react-number-format";

const WithdrawFunds = ({ onWithdraw }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const [withdrawAccountName, setWithdrawAccountName] = useState("");
  const [newBalance, setNewBalance] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (newBalance < 1) {
      alert("Please provide an amount higher than P1.00");
      return false;
    } else {
      onWithdraw(withdrawAccountName, newBalance);

      setWithdrawAccountName("");
      setNewBalance("");
    }
  };

  return (
    <div>
      {/* add new button in dashboard to open modal */}
      <button onClick={() => setmodalIsOpen(true)}>Withdraw</button>
      <Modal isOpen={modalIsOpen}>
        {/* the modal itself */}
        <section>
          <h2 className="font-semibold text-center text-2xl pt-3">
            Withdraw Form
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
              <label className="font-semibold  text-xl">Account Name:</label>
              <br></br>
              <input
                name="account_name"
                value={withdrawAccountName}
                onChange={(e) => setWithdrawAccountName(e.target.value)}
                placeholder="Search Account Name"
                required
                className="border-2 border-indigo-800 mt-2 mb-1 p-1 w-6/12"
              ></input>
              <br></br>

              <label className="font-semibold text-xl">
                Amount to withdraw:
              </label>
              <br></br>

              <input
                name="account_balance"
                value={newBalance}
                onChange={(e) => setNewBalance(e.target.value)}
                type="number"
                className="border-2 border-indigo-800 mt-2 mb-1 p-1 w-6/12"
              ></input>

              <div className="text-center py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 w-24 mt-10">
                <button onClick={onHandleSubmit}>Submit</button>
              </div>
            </div>
          </form>
        </section>
      </Modal>
    </div>
  );
};

export default WithdrawFunds;
