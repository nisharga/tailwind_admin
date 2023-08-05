import CustomLinks from "../CustomLink/CustomLinks"
import { GrHomeRounded } from "react-icons/gr";
import { RiProfileLine } from "react-icons/ri";
import { BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
const BottomBar = () => {
  return (
    <div className="w-[100%] bg-slate-50 p-2 flex justify-center">
        <div className="flex">
        <CustomLinks to="/">
         <GrHomeRounded color="white"/>
         </CustomLinks>
        <CustomLinks to="analisis">
          <RiProfileLine color="#B6B6B6"/>
         </CustomLinks>
         <CustomLinks to="overview">
         <CgProfile color="#B6B6B6"/>
         </CustomLinks>
         <CustomLinks to="profile">
         <BsCardList color="#B6B6B6"/>
         </CustomLinks>
         <CustomLinks to="search">
            <FaSearch color="#B6B6B6"/>
         </CustomLinks>
        </div>
    </div>
  )
}

export default BottomBar