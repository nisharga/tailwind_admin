
import Analytics from './Analytics/Analytics';
import OverviewSection from './OverviewSection/OverviewSection';
const Dashboard = () => {
  return (
    <div>
        <div className="flex flex-row">
            <div className="basis-3/12">
                <OverviewSection/>
            </div>
            <div className="basis-7/12">
              <Analytics/>
            </div>
            <div className="basis-2/12">03</div>
        </div>
    </div>
  )
}

export default Dashboard