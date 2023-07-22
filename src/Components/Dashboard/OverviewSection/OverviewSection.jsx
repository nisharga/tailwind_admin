import BalanceDetails from "./BalanceDetails/BalanceDetails"
import Profile from "./Profile/Profile"

const OverviewSection = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen pt-5">
        <Profile/>
        <BalanceDetails/>
    </div>
  )
}

export default OverviewSection