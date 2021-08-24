// import NewAccount from "./NewAccount";
// import TransferFunds from "./TransferFunds";
// import DepositAccount from "./DepositAccount";
// import WithdrawFunds from "./WithdrawFunds";

function Dashboard() {
  const user = "Bank Employee";

  return (
    <>
      <div className="pt-10 pl-20 text-4xl">
        <h1>Welcome, {user}!</h1>
      </div>
    </>
  );
}

export default Dashboard;
