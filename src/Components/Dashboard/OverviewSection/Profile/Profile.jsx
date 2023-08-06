import { Link } from "react-router-dom";
import profileImg from "../../../../Asset/profile.jpg";

import { GrNotification } from "react-icons/gr";
const Profile = () => {
  return (
    <div className="relative">
    <div className="flex align-middle pl-5 py-5 md:bg-[#FAFAFA] rounded-lg">
       <div className="">
            <img src={profileImg} alt="profileImg" 
            className="w-[70px] rounded-full "/>
       </div>
       <div className="ml-5 mt-2">
        <h2 className="text-xl font-bold">Hi Mike,</h2>
        <h3 className="text-lg">Welcome Back</h3>
       </div>
    </div>
          <div className="fixed top-0 right-0 mt-4 md:hidden">
            <Link to="">
              <div className="p-4"> 
                <GrNotification/>
              </div>
            </Link>
          </div>
    </div>
  )
}

export default Profile