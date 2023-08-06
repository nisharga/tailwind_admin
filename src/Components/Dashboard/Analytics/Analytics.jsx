import Categories from "./Categories/Categories"
import ContributionsChart from "./ContributionsChart/ContributionsChart"
import Counter from "./Counter/Counter"
import Goals from "./Goals/Goals"

 
const Analytics = () => {
  return (
    <div className=" pl-5 pt-5">
        <div className="title pt-5">
            <h5 className="text-blue-700">Retirement Income</h5>
            <h4 className="text-xl font-bold opacity-75">Starting Year 2056</h4>
        </div>
        <div className="">
            <Goals/>
        </div>
        <div className="pt-5">
            <h5 className="text-md font-bold opacity-75">Contributon Overtime</h5>
            <ContributionsChart/>
        </div>
        <div className="pt-10 md:pt-5">
            <div className="pb-3">
                <h5 className="text-lg font-bold opacity-75 mb-1">How do I compare to my peers?</h5>
                <p className="text-sm text-[#C5C5C5] mb-1">These numbers represent current goal achievement</p>
            </div> 
            <div className="lg:flex">
                <div className="Categories flex-none mr-12">
                    <Categories/>
                </div> 
                <div className="Counter">
                   <Counter/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics