import Modal from "react-modal";
import { useState } from "react";
// import NumberFormat from "react-number-format";

function DepositAccount({ onDeposit }) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const [depositAccountName, setDepositAccountName] = useState("");
  const [newBalance, setNewBalance] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (newBalance < 1) {
      alert("Please provide an amount higher than P1.00");
      return false;
    } else {
      onDeposit(depositAccountName, newBalance);
      setDepositAccountName("");
      setNewBalance("");
    }
  };

  return (
    <div>
      {/* add new button in dashboard to open modal */}
      <button onClick={() => setmodalIsOpen(true)}>Deposit</button>
      <Modal isOpen={modalIsOpen}>
        {/* the modal itself */}

        <section>
          <h2 className="font-semibold text-center text-2xl pt-3">
            Deposit Form
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
              <input
                name="account_name"
                value={depositAccountName}
                onChange={(e) => setDepositAccountName(e.target.value)}
                placeholder="Search Account Name"
                required
                type="text"
                className="border-2 border-indigo-800 mt-2 mb-8 p-1 w-6/12"
              ></input>

              <label className="font-semibold text-xl ">
                Amount to deposit:
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
}

export default DepositAccount;
