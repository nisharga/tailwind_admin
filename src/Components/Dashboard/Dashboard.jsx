
import OverviewSection from './OverviewSection/OverviewSection';
const Dashboard = () => {
  return (
    <div>
        <div className="flex flex-row">
            <div className="basis-1/5">
                <OverviewSection/>
            </div>
            <div className="basis-1/3">02</div>
            <div className="basis-1/4">03</div>
        </div>
    </div>
  )
}

export default Dashboard