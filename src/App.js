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
        if (depositAccountName === account.name) {
          account.bal = parseInt(account.bal) + parseInt(newBalance);
          alert("Deposit Successful!");
        } else if (depositAccountName !== account.name) {
          // alert("Account name does not exist!");
        }
        return account;
      })
    );
  };

  const onWithdraw = (withdrawAccountName, newBalance) => {
    setAccountData(
      accountData.map((account) => {
        if (account.name === withdrawAccountName && account.bal > newBalance) {
          account.bal = parseInt(account.bal) - parseInt(newBalance);
          alert("Withdraw Successful!");
        } else if (parseInt(account.bal) < parseInt(newBalance)) {
          account.bal = account.bal;
          alert("Insufficient Funds!");
        } else if (account.name !== withdrawAccountName) {
          // alert("Account name not found!");
        }
        return account;
      })
    );
  };

  const onTransfer = (tFromAccountName, tToAccountName, newBalance) => {
    setAccountData(
      accountData.map((account) => {
        if (account.name === tFromAccountName && account.bal > newBalance) {
          account.bal = parseInt(account.bal) - parseInt(newBalance);
          alert("Fund transfer successful!");
        } else if (
          tFromAccountName === account.name &&
          tToAccountName !== account.name
        ) {
          account.bal = parseInt(account.bal);
          alert("No account name found!");
        } else if (
          tFromAccountName === account.name &&
          account.bal < newBalance
        ) {
          alert("Insufficient funds!");
        } else if (
          account.name === tToAccountName &&
          account.name !== tFromAccountName
        ) {
          account.bal = account.bal;
          alert("No account name found!");
        } else if (account.name === tToAccountName) {
          account.bal = parseInt(account.bal) + parseInt(newBalance);
          alert("Fund transfer successful!");
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
