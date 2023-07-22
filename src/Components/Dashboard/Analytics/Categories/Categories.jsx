import { useState } from "react";

 
const Categories = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        showAlert(event.target.value + ' selected!');
      };
    
      const showAlert = (message) => {
        alert(message);
      };
  return (
    <div>
        <div className="pb-3"> 
            <div className="flex">
                <h5 className="text-sm font-bold opacity-75 mb-2 mr-5">Age:</h5>
                <div className="">
                    <select
                        value={selectedOption}
                        onChange={handleOptionChange}
                        className=""
                    >
                        <option value="under-30">under-30</option>
                        <option value="under-50">under-50</option>
                        <option value="under-70">under-70</option>
                    </select>
                </div>
            </div>
            <hr />
        </div>
        <div className="pb-3"> 
            <div className="flex">
                <h5 className="text-sm font-bold opacity-75 mb-2 mr-5">Salary:</h5>
                <div className="">
                    <select
                    >
                        <option value="K 20-K 30">K 20-K 30</option>
                        <option value="K 30-K 40">K 30-K 40</option>
                        <option value="K 40-K 50">K 40-K 50</option>
                    </select>
                </div>
            </div>
            <hr />
        </div>
        <div className="pb-3"> 
            <div className="flex">
                <h5 className="text-sm font-bold opacity-75 mb-2 mr-5">Gender:</h5>
                <div className="">
                    <select
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Categories