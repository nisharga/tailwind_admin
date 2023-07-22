
const RecentTransactions = () => {
  return (
    <div className="px-5 py-5"> 
        <h4 className="text-sm font-bold pb-5">Recent Transactions</h4>
        <div className="pb-3">
            <p className="text-sm text-[#C5C5C5] mb-1">2020-08-07</p>
            <h5 className="text-sm font-bold opacity-75 mb-2">Withdrawal Transfer to
            Bank-XXX11</h5>
            <hr />
        </div>
        <div className="pb-3">
            <p className="text-sm text-[#C5C5C5] mb-1">2020-07-21</p>
            <h5 className="text-sm font-bold opacity-75 mb-2">Withdrawal Transfer to
            Bank-XXX11</h5>
            <hr />
        </div>
        <div className="pb-3">
            <p className="text-sm text-[#C5C5C5] mb-1">2020-07-16</p>
            <h5 className="text-sm font-bold opacity-75 mb-2">Withdrawal Transfer to
            Bank-XXX11</h5>
            <hr />
        </div>
    </div>
  )
}

export default RecentTransactions