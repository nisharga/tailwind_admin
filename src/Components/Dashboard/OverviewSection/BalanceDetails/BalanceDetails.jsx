import { useState } from "react";

const BalanceDetails = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    showAlert(event.target.value + ' selected!');
  };

  const showAlert = (message) => {
    alert(message);
  };

  return (
    <div className="pl-5 pt-5 bg-[#FAFAFA]">
      <h4 className="text-sm font-bold">Today</h4> 
      <div className="my-3">
        <h2 className="text-2xl font-bold">$<span>19,892</span></h2>
        <h4 className="text-md text-[#C5C5C5] ">Account Balance</h4> 
      </div>
      <div className="flex md:flex-col">
        <div className="my-3 mr-8 md:mr-0">
          <h3 className="text-1xl font-bold">$<span>4000</span></h3>
          <h4 className="text-md text-[#C5C5C5]">Year-To-Date Contribution</h4> 
        </div>
        <div className="my-3">
          <h3 className="text-1xl font-bold">$<span>1892</span></h3>
          <h4 className="text-md text-[#C5C5C5] ">Total Interest</h4> 
        </div>
      </div>
      <div className="mt-5">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="bg-blue-700 hover:bg-blue-900
         text-white font-bold py-3 px-5 rounded w-full md:w-[80%] lg:[60%] text-center md:text-left"
      >
        <option value="">I want to</option>
        <option value="Diposit">Diposit</option>
        <option value="Withdrawal">Withdrawal</option>
      </select>
      </div>
    </div>
  )
}

export default BalanceDetails