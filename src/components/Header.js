import bankLogo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="shadow-md h-10: flex justify-between items-end">
      <img className="h-40: pl-5" src={bankLogo} alt="Bank Logo" />
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 h-9 mr-20 mb-3">
        LOG OUT
      </button>
    </header>
  );
};

export default Header;
