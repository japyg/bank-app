import Modal from "react-modal";
import { useState } from "react";
import NumberFormat from "react-number-format";

function NewAccount({
  // setAccountName,
  // setAccountNumber,
  // setBalance,
  setAccountData,
  accountData,
}) {
  //state for the modal
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const dataHandler = (e) => {
    e.preventDefault();

    // const bal = e.target.account_balance.value;
    // const balCurrency = new Intl.NumberFormat("en-Ph", {
    //   style: "currency",
    //   currency: "PHP",
    // }).format(bal);

    const data = {
      name: e.target.account_name.value,
      number: e.target.account_number.value,
      bal: e.target.account_balance.value,
    };

    if (e.target.account_balance.value < 1) {
      return false;
      alert("Please enter a value greater than P1.00");
    } else {
      setAccountData([...accountData, data]);
      alert("Successfully added account!");
      e.target.account_name.value = "";
      e.target.account_number.value = "";
      e.target.account_balance.value = "";
    }
  };

  return (
    <div>
      {/* add new button in dashboard to open modal */}
      <button onClick={() => setmodalIsOpen(true)}>Add New</button>
      <Modal isOpen={modalIsOpen}>
        {/* the modal itself */}
        <section>
          <h2 className="font-semibold text-center text-2xl pt-3">
            Add New Account
          </h2>
          <form
            onSubmit={dataHandler}
            className="border-2 border-indigo-600 w-6/12 ml-80 mt-11 p-10"
          >
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
                required
                type="text"
                className="border-2 border-indigo-800 mt-2 mb-1 p-1 w-6/12"
              ></input>
              <br></br>
              <p></p>
              <label className="font-semibold text-xl">Account Number:</label>
              <br></br>
              <NumberFormat
                name="account_number"
                type="text"
                displayType="input"
                format="####-####-####"
                isNumericString="true"
                required
                className="border-2 border-indigo-800 mt-2 mb-1 p-1 w-6/12"
              />

              <br></br>
              <label className="font-semibold text-xl">
                Set Initial Amount:
              </label>
              <br></br>

              <input
                name="account_balance"
                type="number"
                required
                className="border-2 border-indigo-800 mt-2 mb-1 p-1 w-6/12"
              ></input>

              {/* <NumberFormat
                thousandsGroupStyle="thousand"
                name="account_balance"
                // prefix="P"
                decimalSeparator="."
                displayType="input"
                type="text"
                thousandSeparator={true}
                allowNegative={false}
                required
                className="border-2 border-indigo-800 mt-2 mb-1 p-1 w-6/12"
              /> */}

              <div className="text-center py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 w-24 ">
                <button>Submit</button>
              </div>
            </div>
          </form>
        </section>
      </Modal>
    </div>
  );
}

export default NewAccount;
