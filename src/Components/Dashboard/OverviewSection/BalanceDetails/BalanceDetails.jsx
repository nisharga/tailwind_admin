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
    <div className="pl-5 pt-5">
      <h4 className="text-sm">Today</h4> 
      <div className="">
        <h2 className="text-2xl font-bold">$<span>19,892</span></h2>
        <h4 className="text-md text-[#C5C5C5] ">Account Balance</h4> 
      </div>
      <div className="">
        <h3 className="text-1xl font-bold">$<span>4000</span></h3>
        <h4 className="text-md text-[#C5C5C5]">Year-To-Date Contribution</h4> 
      </div>
      <div className="">
        <h3 className="text-1xl font-bold">$<span>1892</span></h3>
        <h4 className="text-md text-[#C5C5C5] ">Total Interest</h4> 
      </div>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        <option value="">I want to</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
      </select>
      


       


    </div>
  )
}

export default BalanceDetails