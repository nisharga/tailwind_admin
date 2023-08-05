import { LiaGreaterThanSolid } from "react-icons/lia"
import { Link } from "react-router-dom"

 
const HousingAdvance = () => {
  return (
    <div className="relative p-2">
      <div className="absolute left-0 top-0 w-[2px]
       h-[100%] bg-blue-500 rounded-md"></div>
    <div className="container ml-3">
        <h4>Are you considering a <br></br>
        <b>Housing advance?</b></h4>
        <p>Limited time reduced Interest</p>
        <Link to='/' className="flex content-center text-center">
          <div className="mr-2 text-[#0000ff] opacity-70">Learn More</div> 
          <div className="mt-1.5 text-[#0000ff] opacity-70"><LiaGreaterThanSolid /></div>
         </Link>
    </div>
    </div>
  )
}

export default HousingAdvance