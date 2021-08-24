import React from "react";

// function AccountsList({ accountNameSave, accountNumberSave, balanceSave }) {
function AccountsList({ accountData }) {
  return (
    <div className="border-2 border-gray-400 w-3/4 h-96 ml-48 mt-11 p-10">
      <div className="grid grid-cols-4 justify-items-center text-lg  bg-blue-100">
        <div>No.</div>
        <div>Account Name</div>
        <div>Account Number</div>
        <div>Account Balance</div>
      </div>

      <div>
        {accountData.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-4 justify-items-center text-lg"
            >
              <div>{index + 1}</div>
              <div>{item.name}</div>
              <div>{item.number}</div>
              <div>{item.bal}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccountsList;
