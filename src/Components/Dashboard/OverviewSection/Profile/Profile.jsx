import profileImg from "../../../../Asset/profile.jpg";
const Profile = () => {
  return (
    <div className="flex align-middle pl-5 pt-5">
       <div className="">
            <img src={profileImg} alt="profileImg" 
            className="w-[70px] rounded-full "/>
       </div>
       <div className="ml-5 mt-2">
        <h2 className="text-xl font-bold">Hi Mike,</h2>
        <h3 className="text-lg">Welcome Back</h3>
       </div>
    </div>
  )
}

export default Profile