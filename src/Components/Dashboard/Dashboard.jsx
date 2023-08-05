
import Analytics from './Analytics/Analytics';
import OverviewSection from './OverviewSection/OverviewSection';
import Strategy from './Strategy/Strategy';
const Dashboard = () => {
  return (
    <div>
      {/* flex flex-row */}
        <div className="grid grid-rows-4 grid-cols-4 gap-1">
        {/* basis-3/12 */}
            <div className="">
                <OverviewSection/>
            </div>
            {/* basis-6/12 */}
            <div className="col-span-2">
              <Analytics/>
            </div>
            {/* basis-3/12 */}
            <div className="">
              <Strategy/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard