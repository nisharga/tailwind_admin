
const Goals = () => {
  return (
    <div>
      <div className="mt-4 md:flex md:justify-around lg:justify-center">
        <div className="box md:mr-5">
          <div className="my-3">
            <h2 className="text-xl font-bold">$<span>300,000</span></h2>
            <h4 className="text-sm text-[#C5C5C5] py-1">My Goal</h4> 
            <hr className="border-blue-500 border-t-1"/>
          </div>
        </div>  
        <div className="grid grid-cols-2 gap-4">
        <div className="box">
          <div className="my-3">
            <h2 className="text-xl font-bold"><span>59</span>%</h2>
            <h4 className="text-sm text-[#C5C5C5] py-1">Goal Achivement</h4> 
            <hr className="border-blue-500 border-t-1"/>
          </div>
        </div>  
        <div className="box">
          <div className="my-3">
            <h2 className="text-xl font-bold">$<span>300</span></h2>
            <h4 className="text-sm text-[#C5C5C5] py-1">Est. Monthly Income</h4> 
            <hr className="border-blue-500 border-t-1"/>
          </div>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default Goals