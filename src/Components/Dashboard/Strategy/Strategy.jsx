import { LiaGreaterThanSolid } from "react-icons/lia";
import HousingAdvance from "./HousingAdvance/HousingAdvance";
import RangeSliderAge from "./RangeSliderAge/RangeSliderAge";
import { useState } from "react";
import RangeSliderContributon from "./RangeSliderContributon/RangeSliderContributon";
import { Link } from "react-router-dom";

const Strategy = () => {
  const [value, setValue] = useState(65); 
  const [contribution, setContribution] = useState(12); 
  const employeeContribution = 8.4;
  const interestRate = 5;
  const handleClick = () => {
    alert(`You selected: 
    employee Contribution-${contribution},
    Retirement Age-${value}, 
    employeer Contribution: ${employeeContribution},
    interestRate: ${interestRate},
    `
    )
  }
  return (
    <div className="pl-5 pt-5"> 
        <div className="bg-[#FAFAFA] p-5 rounded-md">
        <h5 className="text-lg font-bold opacity-75 pt-5 mb-4">
            Retirement Strategy
        </h5>

         {/* employee contribution  */}
        <div className="py-1">
          <h4 className="pb-1 text-sm font-bold opacity-75">
          Employee Contribution
          </h4>
          <div className="flex content-center">
          <div className="mt-1">
              <RangeSliderContributon contribution={contribution} setContribution={setContribution}/>
            </div>
          <div className="w-[40px]">{contribution}%</div>
          </div>
        </div>
      {/* employee contribution  */}
      
      {/* Retirement Age  */}
        <div className="py-2">
          <h4 className="pb-1 text-sm font-bold opacity-75">
          Retirement Age
          </h4>
          <div className="flex content-center">
          <div className="mt-1">
            <RangeSliderAge setValue={setValue} value={value}/>
            </div>
          <div className="w-[40px]">{value}</div>
          </div>
        </div>
      {/* Retirement Age  */}

      <hr className=" mt-2"/>

      <div className="flex justify-between content-center">
          <div className="mt-1">
            <h4 className="py-2 text-sm font-bold opacity-75">
            Employeer Contribution
            </h4>
            </div>
          <div className="w-[40px] py-2">{employeeContribution}</div>
      </div>
      <div className="flex justify-between content-center">
          <div className="mt-1">
            <h4 className="py-2 text-sm font-bold opacity-75">
            Interest Rate
            </h4>
            </div>
          <div className="py-2 w-[40px] ">{interestRate}</div>
      </div>

       
      <div className="flex justify-center">
        <button className="bg-blue-700 hover:bg-blue-900
         text-white font-bold px-5 rounded-lg lg:w-[80%]
         w-[100%] py-3 my-3"
        onClick={handleClick}>Update</button> 
      </div>

         <Link to='/' className="flex justify-center content-center text-center">
          <div className="mr-2 text-[#0000ff]">View Help Doc</div> 
          <div className="mt-1.5 text-[#0000ff]"><LiaGreaterThanSolid /></div>
         </Link>
      </div>
       <div className="mt-4">
       <HousingAdvance/>
       </div>  
      
    </div>
  )
}

export default Strategy