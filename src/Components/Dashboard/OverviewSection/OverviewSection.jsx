import BalanceDetails from "./BalanceDetails/BalanceDetails"
import Profile from "./Profile/Profile"
import RecentTransactions from "./RecentTransactions/RecentTransactions"

const OverviewSection = () => {
  return (
    <div className="h-screen pt-5">
        <Profile/>
        <BalanceDetails/>
        <RecentTransactions/>
    </div>
  )
}

export default OverviewSection