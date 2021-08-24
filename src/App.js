import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewAccount from "./components/NewAccount";
import TransferFunds from "./components/TransferFunds";
import DepositAccount from "./components/DepositAccount";
import WithdrawFunds from "./components/WithdrawFunds";
import AccountsList from "./components/AccountsList";

function App() {
  // state for the add account modal
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");

  const [accountData, setAccountData] = useState([]);

  const onDeposit = (depositAccountName, newBalance) => {
    setAccountData(
      accountData.map((account) => {
        if (account.name === depositAccountName) {
          account.bal = parseInt(account.bal) + parseInt(newBalance);
          alert("Deposit Successful!");
        } else if (account.name !== depositAccountName) {
          alert("No account name found!");
        }
        return account;
      })
    );
  };

  const onWithdraw = (withdrawAccount, newBalance) => {
    setAccountData(
      accountData.map((account) => {
        if (account.name === withdrawAccount) {
          account.bal = parseInt(account.bal) - parseInt(newBalance);

          alert("Withdraw Successful!");
        } else if (account.name !== withdrawAccount) {
          alert("No account name found!");
        }
        return account;
      })
    );
  };

  const onTransfer = (tFromAccountName, tToAccountName, newBalance) => {
    setAccountData(
      accountData.map((account) => {
        if (account.name === tFromAccountName) {
          account.bal = parseInt(account.bal) - parseInt(newBalance);
        } else if (account.name === tToAccountName) {
          account.bal = parseInt(account.bal) + parseInt(newBalance);
        }
        return account;
      })
    );
  };

  return (
    <>
      <div className="container">
        <Header />
        <Dashboard />
      </div>
      <div>
        <div className=" w-3/4 mt-10 ml-48 mb-10 flex justify-around items-center text-lg">
          <div className="py-1 px-2 font-semibold rounded-md shadow-md text-white bg-blue-500 hover:bg-blue-700 ">
            <NewAccount
              accountName={accountName}
              setAccountName={setAccountName}
              accountNumber={accountNumber}
              setAccountNumber={setAccountNumber}
              balance={balance}
              setBalance={setBalance}
              setAccountData={setAccountData}
              accountData={accountData}
            />
          </div>
          <div className="flex gap-12">
            <div className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700">
              <TransferFunds onTransfer={onTransfer} />
            </div>
            <div className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700">
              <DepositAccount onDeposit={onDeposit} />
            </div>
            <div className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700">
              <WithdrawFunds onWithdraw={onWithdraw} />
            </div>
          </div>
        </div>
      </div>
      <AccountsList
        accountName={accountName}
        accountNumber={accountNumber}
        balance={balance}
        accountData={accountData}
      />
    </>
  );
}
export default App;
